// ============================================
// NEO ARCADE - MAIN APPLICATION
// ============================================

// ============================================
// STATE MANAGEMENT
// ============================================

let currentGames = [];
let favorites = JSON.parse(localStorage.getItem('neoArcadeFavorites')) || [];
let userRatings = JSON.parse(localStorage.getItem('neoArcadeRatings')) || {};

// ============================================
// DOM ELEMENTS
// ============================================

let elements = {}; // 初始化为空对象，在DOM加载后再获取元素

// ============================================
// APPLICATION INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('=== NEO ARCADE INITIALIZATION ===');
  console.log('DOM loaded successfully');
  
  // 重新获取DOM元素，确保在DOM完全加载后获取
  elements = {
    gamesGrid: document.getElementById('games-grid'),
    searchInput: document.getElementById('game-search'),
    categoryFilter: document.getElementById('category-filter'),
    sortFilter: document.getElementById('sort-filter'),
    gameModal: document.getElementById('game-modal'),
    modalTitle: document.getElementById('modal-game-title'),
    gameFrame: document.getElementById('game-iframe'),
    starRating: document.getElementById('star-rating'),
    likeButton: document.getElementById('like-btn'),
    favoriteButton: document.getElementById('favorite-btn'),
    closeButton: document.getElementById('close-modal'),
    mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
    navMenu: document.querySelector('.nav-menu')
  };
  
  console.log('DOM Elements check:');
  console.log('- gamesGrid:', !!elements.gamesGrid);
  console.log('- searchInput:', !!elements.searchInput);
  console.log('- categoryFilter:', !!elements.categoryFilter);
  console.log('- sortFilter:', !!elements.sortFilter);
  
  // 检查gamesData
  console.log('Games Data check:');
  console.log('- gamesData defined:', typeof gamesData !== 'undefined');
  console.log('- gamesData length:', typeof gamesData !== 'undefined' ? gamesData.length : 'N/A');
  
  // 检查renderGames函数
  console.log('- renderGames function available:', typeof renderGames === 'function');
  
  // Initialize application first
  initializeApp();
  setupEventListeners();
  updateStats();
  
  // Initialize navigation functionality
  setupNavigation();
  setupLeaderboardTabs();
  
  // 初始化排行榜数据
  loadLeaderboard('subway-surfers');
  
  // 强制渲染游戏 - 多重保障
  if (typeof gamesData !== 'undefined' && gamesData.length > 0 && elements.gamesGrid) {
    console.log('=== STARTING GAME RENDERING ===');
    console.log('Found', gamesData.length, 'games to render');
    
    currentGames = [...gamesData]; // Set currentGames
    
    // 直接调用renderGames，确保游戏立即显示
    if (typeof renderGames === 'function') {
      console.log('Calling renderGames function...');
      renderGames(gamesData);
      console.log('renderGames call completed');
      
      // 验证渲染结果
      setTimeout(() => {
        const renderedCards = elements.gamesGrid.querySelectorAll('.game-card');
        console.log('Verification: Found', renderedCards.length, 'rendered game cards');
        if (renderedCards.length === 0) {
          console.error('ERROR: No game cards were rendered!');
          // 备用渲染尝试
          console.log('Attempting backup rendering...');
          renderGames(gamesData);
        } else {
          console.log('SUCCESS: Games rendered successfully!');
          // 应用动画效果
          if (typeof animateGameCards === 'function') {
            animateGameCards();
          }
        }
      }, 100);
      
    } else {
      console.error('ERROR: renderGames function not available');
    }
    
    // 重置筛选器状态
    if (elements.categoryFilter) {
      elements.categoryFilter.value = 'all';
      console.log('Category filter reset to "all"');
    }
    if (elements.sortFilter) {
      elements.sortFilter.value = 'popular';
      console.log('Sort filter reset to "popular"');
    }
    if (elements.searchInput) {
      elements.searchInput.value = '';
      console.log('Search input cleared');
    }
    
    updateGamesCount(gamesData.length);
    console.log('=== INITIALIZATION COMPLETE ===');
    
  } else {
    console.error('=== INITIALIZATION FAILED ===');
    console.error('Missing requirements:');
    console.error('- gamesData defined:', typeof gamesData !== 'undefined');
    console.error('- gamesData has content:', typeof gamesData !== 'undefined' && gamesData.length > 0);
    console.error('- gamesGrid element:', !!elements.gamesGrid);
    
    // 显示错误状态
    if (elements.gamesGrid) {
      elements.gamesGrid.innerHTML = `
        <div class="no-games">
          <div class="no-games-icon">⚠️</div>
          <h3>Loading Error</h3>
          <p>Failed to load games. Please refresh the page.</p>
          <button class="neon-button" onclick="location.reload()">Refresh Page</button>
        </div>
      `;
    }
  }
});

function initializeApp() {
  // 设置加载动画
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1000);
  
  // 初始化游戏数据
  if (typeof gamesData !== 'undefined') {
    currentGames = [...gamesData];
  }
  
  // 更新收藏数
  updateFavoritesCount();
  
  // 应用保存的设置
  const savedTheme = localStorage.getItem('neoArcadeTheme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
  
  // 初始化通知系统
  createNotificationContainer();
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

function showSection(sectionName) {
  // 使用平滑滚动而不是显示/隐藏
  const targetElement = document.getElementById(sectionName);
  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // 更新导航链接状态
  updateActiveNavLink(sectionName);
  
  // 根据选中的部分加载相应内容
  switch(sectionName) {
    case 'games':
      if (typeof renderGames === 'function' && typeof gamesData !== 'undefined') {
        renderGames(gamesData);
      }
      break;
    case 'favorites':
      loadFavorites();
      break;
    case 'leaderboard':
      loadLeaderboard('subway-surfers');
      break;
  }
}

function updateActiveNavLink(sectionName) {
  // 移除所有导航链接的active类
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // 为当前部分的导航链接添加active类
  const activeLink = document.querySelector(`.nav-link[href="#${sectionName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function setupNavigation() {
  // 为导航链接添加点击事件
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionName = this.getAttribute('href').substring(1);
      showSection(sectionName);
    });
  });
  
  // 设置滚动监听
  setupScrollNavigation();
}

function setupScrollNavigation() {
  // 获取所有导航部分
  const sections = ['home', 'games', 'favorites', 'leaderboard'];
  const sectionElements = sections.map(id => ({
    id,
    element: document.getElementById(id),
    offsetTop: 0
  })).filter(section => section.element);
  
  // 计算每个部分的偏移位置
  function updateSectionOffsets() {
    sectionElements.forEach(section => {
      section.offsetTop = section.element.offsetTop - 100; // 减去导航栏高度
    });
  }
  
  // 初始计算偏移位置
  updateSectionOffsets();
  
  // 窗口大小改变时重新计算
  window.addEventListener('resize', updateSectionOffsets);
  
  // 滚动监听
  let ticking = false;
  
  function updateActiveSection() {
    const scrollY = window.pageYOffset;
    
    // 找到当前滚动位置对应的部分
    let currentSection = 'home'; // 默认为home
    
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const section = sectionElements[i];
      if (scrollY >= section.offsetTop) {
        currentSection = section.id;
        break;
      }
    }
    
    // 更新导航状态
    updateActiveNavLink(currentSection);
    
    // 根据当前部分自动加载内容
    if (currentSection === 'games' && typeof renderGames === 'function' && typeof gamesData !== 'undefined') {
      // 延迟加载games内容，避免在滚动时频繁渲染
      if (!window.gamesRendered) {
        setTimeout(() => {
          renderGames(gamesData);
          window.gamesRendered = true;
        }, 300);
      }
    }
    
    ticking = false;
  }
  
  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  }
  
  // 添加滚动事件监听
  window.addEventListener('scroll', requestScrollUpdate);
  
  // 初始设置
  updateActiveSection();
}

// ============================================
// FAVORITES MANAGEMENT
// ============================================

function toggleFavorite(gameId) {
  if (!gameId) return;
  
  const index = favorites.indexOf(gameId);
  if (index === -1) {
    favorites.push(gameId);
    showNotification('Game added to favorites!', 'success');
  } else {
    favorites.splice(index, 1);
    showNotification('Game removed from favorites!', 'info');
  }
  
  // Save to local storage
  localStorage.setItem('neoArcadeFavorites', JSON.stringify(favorites));
  
  // Update interface
  updateFavoriteButtons();
  updateFavoritesCount();
  
  // If currently on favorites page, reload
  const favoritesSection = document.getElementById('favorites');
  if (favoritesSection && favoritesSection.style.display !== 'none') {
    loadFavorites();
  }
}

function updateFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const gameId = parseInt(btn.closest('.game-card')?.dataset.gameId);
    const isFavorited = favorites.includes(gameId);
    
    btn.textContent = isFavorited ? '❤️' : '🤍';
    btn.classList.toggle('favorited', isFavorited);
    btn.title = isFavorited ? 'Remove from favorites' : 'Add to favorites';
  });
}

function loadFavorites() {
  const favoritesGrid = document.getElementById('favorites-grid');
  if (!favoritesGrid) return;
  
  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `
      <div class="no-favorites">
        <div class="no-favorites-icon">💖</div>
        <h3>No favorite games yet!</h3>
        <p>Click the heart icon on any game card to add it to your favorites</p>
        <button class="neon-button" onclick="showSection('games')">Browse Games</button>
      </div>
    `;
    return;
  }
  
  // Get favorite games
  const favoriteGames = gamesData.filter(game => favorites.includes(game.id));
  
  // Clear existing content
  favoritesGrid.innerHTML = '';
  
  // Create card for each favorite game
  favoriteGames.forEach(game => {
    const gameCard = createGameCard(game);
    favoritesGrid.appendChild(gameCard);
  });
  
  // Update favorite button states
  updateFavoriteButtons();
}

function updateFavoritesCount() {
  const countElement = document.querySelector('.favorites-count');
  if (countElement) {
    countElement.textContent = `${favorites.length} favorite games`;
  }
}

// ============================================
// LEADERBOARD FUNCTIONALITY
// ============================================

function loadLeaderboard(gameType = 'subway-surfers') {
  const leaderboardTable = document.querySelector('.leaderboard-table .table-body');
  if (!leaderboardTable) return;
  
  // 模拟排行榜数据
  const mockData = [
    { rank: 1, player: 'NeonMaster', score: 15840, date: '2024-01-15' },
    { rank: 2, player: 'CyberRunner', score: 14720, date: '2024-01-14' },
    { rank: 3, player: 'RetroGamer', score: 13650, date: '2024-01-13' },
    { rank: 4, player: 'ArcadeKing', score: 12980, date: '2024-01-12' },
    { rank: 5, player: 'PixelHero', score: 11450, date: '2024-01-11' },
    { rank: 6, player: 'NeonNinja', score: 10890, date: '2024-01-10' },
    { rank: 7, player: 'GlowGamer', score: 9750, date: '2024-01-09' },
    { rank: 8, player: 'CyberPunk', score: 8640, date: '2024-01-08' }
  ];
  
  leaderboardTable.innerHTML = '';
  
  mockData.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'leaderboard-row';
    row.innerHTML = `
      <div class="rank-col">#${entry.rank}</div>
      <div class="player-col">${entry.player}</div>
      <div class="score-col">${entry.score.toLocaleString()}</div>
      <div class="date-col">${entry.date}</div>
    `;
    leaderboardTable.appendChild(row);
  });
  
  // 更新用户统计
  const userStats = {
    bestScore: 8450,
    gamesThisMonth: 23,
    onlinePlayers: 1247
  };
  
  const yourScoreElement = document.querySelector('.your-score');
  const gamesPlayedElement = document.querySelector('.games-played');
  const totalPlayersElement = document.querySelector('.total-players');
  
  if (yourScoreElement) yourScoreElement.textContent = userStats.bestScore.toLocaleString();
  if (gamesPlayedElement) gamesPlayedElement.textContent = userStats.gamesThisMonth;
  if (totalPlayersElement) totalPlayersElement.textContent = userStats.onlinePlayers.toLocaleString();
}

function switchLeaderboardTab(gameType) {
  // 切换tab样式
  document.querySelectorAll('.tab-button').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`[data-game="${gameType}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // 加载对应的排行榜数据
  loadLeaderboard(gameType);
}

function setupLeaderboardTabs() {
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
      const gameType = this.dataset.game;
      switchLeaderboardTab(gameType);
    });
  });
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
  // 搜索和筛选
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', handleSearch);
  }
  if (elements.categoryFilter) {
    elements.categoryFilter.addEventListener('change', handleFilter);
  }
  if (elements.sortFilter) {
    elements.sortFilter.addEventListener('change', handleSort);
  }
  
  // 游戏卡片点击事件
  document.addEventListener('click', handleGameCardEvents);
  
  // 移动菜单
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // 键盘控制
  document.addEventListener('keydown', handleKeyboard);
  
  // 窗口事件
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
}

function handleGameCardEvents(e) {
  const action = e.target.dataset.action;
  const gameCard = e.target.closest('.game-card');
  const gameId = gameCard ? parseInt(gameCard.dataset.gameId) : null;
  
  switch (action) {
    case 'play':
      if (gameId) {
        playGame(gameId);
      }
      break;
    case 'favorite':
      if (gameId) {
        toggleFavorite(gameId);
      }
      break;
  }
}

function playGame(gameId) {
  const game = gamesData.find(g => g.id === gameId);
  if (!game) {
    showNotification('Game not found!', 'error');
    return;
  }

  // 检查是否有有效的 iframeUrl
  if (!game.iframeUrl) {
    showNotification(`Sorry, ${game.title} is temporarily unavailable`, 'warning');
    return;
  }

  // 获取相关游戏推荐
  const relatedGames = getRelatedGames(game);

  // 获取或创建游戏模态框
  let gameModal = document.getElementById('game-modal');
  
  // 如果模态框不存在，创建一个完整的游戏界面
  if (!gameModal) {
    gameModal = document.createElement('div');
    gameModal.id = 'game-modal';
    gameModal.className = 'game-modal';
    document.body.appendChild(gameModal);
  }

  // 创建完整的游戏界面HTML
  gameModal.innerHTML = `
    <div class="modal-overlay" onclick="closeGameModal()"></div>
    <div class="game-modal-container">
      <!-- 游戏头部信息 - 固定位置 -->
      <div class="game-modal-header">
        <div class="game-title-section">
          <h2 class="game-modal-title neon-text">${game.title}</h2>
          <div class="game-meta-info">
            <div class="game-rating">
              <span class="stars">${generateStars(game.rating)}</span>
              <span class="rating-value">${game.rating}</span>
            </div>
            <div class="game-likes">
              <span class="like-count">${formatNumber(game.likes)}</span>
              <span class="like-icon">👍</span>
            </div>
            <div class="game-category">
              <span class="category-badge">${game.category.toUpperCase()}</span>
            </div>
          </div>
        </div>
        
        <div class="game-modal-controls">
          <button class="modal-btn favorite-btn ${favorites.includes(game.id) ? 'favorited' : ''}" 
                  onclick="toggleFavorite(${game.id}); updateGameModalFavorite(${game.id})">
            ${favorites.includes(game.id) ? '❤️' : '🤍'}
          </button>
          <button class="modal-btn back-btn neon-button" onclick="closeGameModal()">
            ◀ Back to Home
          </button>
          <button class="modal-btn close-btn" onclick="closeGameModal()">✕</button>
        </div>
      </div>

      <!-- 可滚动的主体内容区域 -->
      <div class="game-modal-content">
        <div class="game-modal-body">
          <!-- 左侧主要内容区 -->
          <div class="game-main-section">
            <!-- 游戏画面区域（16:9比例） -->
            <div class="game-frame-section">
              <div class="game-frame-container">
                <iframe id="game-iframe" 
                        src="${game.iframeUrl}" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay; fullscreen">
                </iframe>
                <div class="game-loading-overlay">
                  <div class="loading-spinner">🎮</div>
                  <p>Loading Game...</p>
                </div>
              </div>
              
              <!-- 游戏控制按钮 -->
              <div class="game-controls">
                <button class="control-btn neon-button" onclick="toggleGameFullscreen()">
                  🔍 Fullscreen
                </button>
                <button class="control-btn neon-button" onclick="reloadGame(${game.id})">
                  🔄 Reload
                </button>
              </div>
            </div>

            <!-- 游戏信息区域（在游戏框下方） -->
            <div class="game-info-below">
              <div class="game-description">
                <h3>🎮 Game Description</h3>
                <p>${game.description}</p>
              </div>

              <div class="game-instructions">
                <h3>🎯 How to Play</h3>
                <div class="instructions-list">
                  ${game.instructions ? game.instructions.map(instruction => 
                    `<div class="instruction-item">
                      <span class="instruction-icon">▶</span>
                      <span class="instruction-text">${instruction}</span>
                    </div>`
                  ).join('') : '<p>No instructions available</p>'}
                </div>
              </div>

              <div class="game-tags">
                <h3>🏷️ Game Tags</h3>
                <div class="tags-container">
                  ${game.tags ? game.tags.map(tag => 
                    `<span class="tag">${tag}</span>`
                  ).join('') : ''}
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧相关游戏推荐 -->
          <div class="related-games-section">
            <h3 class="section-title neon-text">🎯 Related Games</h3>
            <div class="related-games-grid">
              ${relatedGames.map(relatedGame => `
                <div class="related-game-card" onclick="playGame(${relatedGame.id})">
                  <div class="related-game-thumbnail">
                    <img src="${relatedGame.thumbnail}" alt="${relatedGame.title}" 
                         onerror="this.src='https://via.placeholder.com/120x90/6B46C1/FFFFFF?text=${encodeURIComponent(relatedGame.title.charAt(0))}'">
                    <div class="play-overlay">▶</div>
                  </div>
                  <div class="related-game-info">
                    <h4 class="related-game-title">${relatedGame.title}</h4>
                    <div class="related-game-meta">
                      <span class="related-rating">⭐ ${relatedGame.rating}</span>
                      <span class="related-category">${relatedGame.category}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <div class="more-games">
              <button class="neon-button" onclick="closeGameModal(); showSection('games')">
                View More Games →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // 应用样式
  gameModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
  `;

  // 样式化模态框容器 - 增大尺寸
  const modalContainer = gameModal.querySelector('.game-modal-container');
  if (modalContainer) {
    modalContainer.style.cssText = `
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border: 2px solid var(--neon-cyan);
      border-radius: 20px;
      box-shadow: 
        0 0 50px rgba(0, 255, 255, 0.3),
        inset 0 0 30px rgba(0, 255, 255, 0.1);
      width: 98vw;
      height: 98vh;
      max-width: 1800px;
      max-height: 1200px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    `;
  }

  // 样式化头部 - 进一步减小高度并固定位置
  const modalHeader = gameModal.querySelector('.game-modal-header');
  if (modalHeader) {
    modalHeader.style.cssText = `
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 12px;
      background: rgba(148, 0, 211, 0.15);
      border-bottom: 2px solid var(--neon-cyan);
      backdrop-filter: blur(15px);
      flex-shrink: 0;
      min-height: 40px;
      max-height: 40px;
    `;
  }

  // 样式化游戏标题区域
  const gameTitleSection = gameModal.querySelector('.game-title-section');
  if (gameTitleSection) {
    gameTitleSection.style.cssText = `
      display: flex;
      align-items: center;
      gap: 20px;
      flex: 1;
      min-width: 0;
      margin-left: 50px;
    `;
  }

  // 样式化游戏标题
  const gameModalTitle = gameModal.querySelector('.game-modal-title');
  if (gameModalTitle) {
    gameModalTitle.style.cssText = `
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      color: var(--neon-cyan);
      text-shadow: 0 0 10px var(--neon-cyan);
      line-height: 1.1;
      flex-shrink: 0;
      margin-right: 10px;
    `;
  }

  // 样式化游戏元信息
  const gameMetaInfo = gameModal.querySelector('.game-meta-info');
  if (gameMetaInfo) {
    gameMetaInfo.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      flex-shrink: 0;
    `;
  }

  // 样式化评分区域
  const gameRating = gameModal.querySelector('.game-rating');
  if (gameRating) {
    gameRating.style.cssText = `
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(255, 255, 255, 0.08);
      padding: 1px 4px;
      border-radius: 8px;
      border: 1px solid rgba(148, 0, 211, 0.5);
      font-size: 10px;
    `;
  }

  // 样式化星级显示
  const stars = gameModal.querySelector('.stars');
  if (stars) {
    stars.style.cssText = `
      font-size: 8px;
      color: #ffd700;
    `;
  }

  // 样式化评分值
  const ratingValue = gameModal.querySelector('.rating-value');
  if (ratingValue) {
    ratingValue.style.cssText = `
      font-size: 9px;
      font-weight: bold;
      color: var(--neon-cyan);
    `;
  }

  // 样式化点赞区域
  const gameLikes = gameModal.querySelector('.game-likes');
  if (gameLikes) {
    gameLikes.style.cssText = `
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(255, 255, 255, 0.08);
      padding: 1px 4px;
      border-radius: 8px;
      border: 1px solid rgba(148, 0, 211, 0.5);
      font-size: 10px;
    `;
  }

  // 样式化点赞数
  const likeCount = gameModal.querySelector('.like-count');
  if (likeCount) {
    likeCount.style.cssText = `
      font-size: 9px;
      font-weight: bold;
      color: var(--neon-cyan);
    `;
  }

  // 样式化点赞图标
  const likeIcon = gameModal.querySelector('.like-icon');
  if (likeIcon) {
    likeIcon.style.cssText = `
      font-size: 8px;
      color: #ff6b6b;
    `;
  }

  // 样式化分类标签
  const gameCategory = gameModal.querySelector('.game-category');
  if (gameCategory) {
    gameCategory.style.cssText = `
      display: flex;
      align-items: center;
    `;
  }

  const categoryBadge = gameModal.querySelector('.category-badge');
  if (categoryBadge) {
    categoryBadge.style.cssText = `
      background: var(--neon-purple);
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;
  }

  // 样式化控制按钮区域
  const gameModalControls = gameModal.querySelector('.game-modal-controls');
  if (gameModalControls) {
    gameModalControls.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
    `;
  }

  // 样式化收藏按钮
  const favoriteBtn = gameModal.querySelector('.favorite-btn');
  if (favoriteBtn) {
    favoriteBtn.style.cssText = `
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--neon-purple);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    `;
  }

  // 样式化返回按钮 - 进一步缩小尺寸
  const backBtn = gameModal.querySelector('.back-btn');
  if (backBtn) {
    backBtn.style.cssText = `
      background: rgba(148, 0, 211, 0.15);
      border: 1px solid var(--neon-cyan);
      border-radius: 10px;
      padding: 2px 8px;
      color: var(--neon-cyan);
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 9px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      white-space: nowrap;
    `;
  }

  // 样式化关闭按钮
  const closeBtn = gameModal.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.style.cssText = `
      background: rgba(255, 0, 0, 0.2);
      border: 1px solid #ff6b6b;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #ff6b6b;
      font-size: 14px;
      font-weight: bold;
    `;
  }

  // 添加按钮hover效果
  if (favoriteBtn) {
    favoriteBtn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 255, 255, 0.2)';
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.5)';
    });
    favoriteBtn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(255, 255, 255, 0.1)';
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  }

  if (backBtn) {
    backBtn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(148, 0, 211, 0.4)';
      this.style.transform = 'translateY(-1px)';
      this.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.3)';
    });
    backBtn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(148, 0, 211, 0.2)';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 0, 0, 0.4)';
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 0 15px rgba(255, 107, 107, 0.5)';
    });
    closeBtn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(255, 0, 0, 0.2)';
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  }

  // 样式化可滚动内容区域
  const modalContent = gameModal.querySelector('.game-modal-content');
  if (modalContent) {
    modalContent.style.cssText = `
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: var(--neon-cyan) transparent;
    `;
    
    // 自定义滚动条样式
    const scrollbarStyle = document.createElement('style');
    scrollbarStyle.textContent = `
      .game-modal-content::-webkit-scrollbar {
        width: 8px;
      }
      .game-modal-content::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }
      .game-modal-content::-webkit-scrollbar-thumb {
        background: var(--neon-cyan);
        border-radius: 4px;
        box-shadow: 0 0 10px var(--neon-cyan);
      }
      .game-modal-content::-webkit-scrollbar-thumb:hover {
        background: var(--neon-purple);
        box-shadow: 0 0 15px var(--neon-purple);
      }
    `;
    if (!document.head.querySelector('style[data-modal-scrollbar]')) {
      scrollbarStyle.setAttribute('data-modal-scrollbar', 'true');
      document.head.appendChild(scrollbarStyle);
    }
  }

  // 样式化主体区域
  const modalBody = gameModal.querySelector('.game-modal-body');
  if (modalBody) {
    modalBody.style.cssText = `
      display: flex;
      gap: 25px;
      padding: 20px;
      min-height: calc(100vh - 45px);
    `;
  }

  // 样式化左侧主要内容区 - 移除独立滚动
  const gameMainSection = gameModal.querySelector('.game-main-section');
  if (gameMainSection) {
    gameMainSection.style.cssText = `
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;
  }

  // 样式化游戏画面区域（16:9比例）
  const gameFrameSection = gameModal.querySelector('.game-frame-section');
  if (gameFrameSection) {
    gameFrameSection.style.cssText = `
      flex-shrink: 0;
    `;
  }

  // 样式化游戏框架容器（16:9比例）
  const gameFrameContainer = gameModal.querySelector('.game-frame-container');
  if (gameFrameContainer) {
    gameFrameContainer.style.cssText = `
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      background: #000;
      border: 2px solid var(--neon-purple);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
    `;
  }

  // 样式化iframe
  const gameIframe = gameModal.querySelector('#game-iframe');
  if (gameIframe) {
    gameIframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      background: #000;
    `;
  }

  // 样式化游戏控制按钮
  const gameControls = gameModal.querySelector('.game-controls');
  if (gameControls) {
    gameControls.style.cssText = `
      display: flex;
      gap: 10px;
      margin-top: 15px;
    `;
  }

  // 样式化游戏信息区域
  const gameInfoBelow = gameModal.querySelector('.game-info-below');
  if (gameInfoBelow) {
    gameInfoBelow.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;
  }

  // 样式化右侧相关游戏区域 - 移除独立滚动
  const relatedGamesSection = gameModal.querySelector('.related-games-section');
  if (relatedGamesSection) {
    relatedGamesSection.style.cssText = `
      flex: 1;
      min-width: 350px;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 25px;
      border-left: 2px solid var(--neon-cyan);
    `;
  }

  // 样式化相关游戏网格
  const relatedGamesGrid = gameModal.querySelector('.related-games-grid');
  if (relatedGamesGrid) {
    relatedGamesGrid.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 15px;
    `;
  }

  // 为相关游戏卡片添加样式
  gameModal.querySelectorAll('.related-game-card').forEach(card => {
    card.style.cssText = `
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--neon-purple);
      border-radius: 10px;
      padding: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      gap: 12px;
      align-items: center;
    `;
    
    // 添加hover效果
    card.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 255, 255, 0.1)';
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 5px 15px rgba(0, 255, 255, 0.2)';
      this.style.borderColor = 'var(--neon-cyan)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(255, 255, 255, 0.05)';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
      this.style.borderColor = 'var(--neon-purple)';
    });
  });

  // 为相关游戏缩略图添加样式 - 确保显示
  gameModal.querySelectorAll('.related-game-thumbnail').forEach(thumb => {
    thumb.style.cssText = `
      position: relative;
      width: 100px;
      height: 75px;
      border-radius: 8px;
      overflow: hidden;
      flex-shrink: 0;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--neon-purple);
    `;
  });

  gameModal.querySelectorAll('.related-game-thumbnail img').forEach(img => {
    img.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    `;
    
    // 添加hover效果
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // 样式化play overlay
  gameModal.querySelectorAll('.play-overlay').forEach(overlay => {
    overlay.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 255, 255, 0.8);
      color: #000;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
  });

  // 添加hover时显示播放按钮
  gameModal.querySelectorAll('.related-game-thumbnail').forEach(thumb => {
    const overlay = thumb.querySelector('.play-overlay');
    thumb.addEventListener('mouseenter', function() {
      if (overlay) overlay.style.opacity = '1';
    });
    thumb.addEventListener('mouseleave', function() {
      if (overlay) overlay.style.opacity = '0';
    });
  });

  // 样式化相关游戏信息区域
  gameModal.querySelectorAll('.related-game-info').forEach(info => {
    info.style.cssText = `
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
    `;
  });

  gameModal.querySelectorAll('.related-game-title').forEach(title => {
    title.style.cssText = `
      font-size: 14px;
      font-weight: bold;
      color: var(--neon-cyan);
      margin: 0;
      line-height: 1.2;
    `;
  });

  gameModal.querySelectorAll('.related-game-meta').forEach(meta => {
    meta.style.cssText = `
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--text-secondary);
    `;
  });

  // 防止背景滚动
  document.body.style.overflow = 'hidden';

  // 处理iframe加载
  const iframe = gameModal.querySelector('#game-iframe');
  const loadingOverlay = gameModal.querySelector('.game-loading-overlay');
  
  if (iframe && loadingOverlay) {
    // 显示加载动画
    loadingOverlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--neon-cyan);
      z-index: 100;
    `;

    iframe.onload = () => {
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.style.display = 'none';
        }
      }, 1000);
    };

    iframe.onerror = () => {
      if (loadingOverlay) {
        loadingOverlay.innerHTML = `
          <div style="color: #ff6b6b;">❌</div>
          <p>Failed to load game</p>
          <button class="neon-button" onclick="reloadGame(${game.id})">Retry</button>
        `;
      }
    };
  }

  showNotification(`Starting game: ${game.title}`, 'success');
}

// 添加获取相关游戏的函数
function getRelatedGames(currentGame) {
  if (!gamesData || !currentGame) return [];
  
  // 获取同类型的游戏
  const sameCategory = gamesData.filter(game => 
    game.id !== currentGame.id && 
    game.category === currentGame.category
  );
  
  // 获取相似标签的游戏
  const similarTags = gamesData.filter(game => 
    game.id !== currentGame.id && 
    game.category !== currentGame.category &&
    game.tags && currentGame.tags &&
    game.tags.some(tag => currentGame.tags.includes(tag))
  );
  
  // 合并并去重
  const relatedGames = [...sameCategory, ...similarTags];
  const uniqueGames = relatedGames.filter((game, index, self) => 
    index === self.findIndex(g => g.id === game.id)
  );
  
  // 按评分排序并返回前6个
  return uniqueGames
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}

// 添加相关辅助函数
function updateStats() {
  // Update statistics
  const totalGames = gamesData ? gamesData.length : 0;
  const totalFavorites = favorites.length;
  
  console.log(`Stats: ${totalGames} games, ${totalFavorites} favorites`);
}

function updateGamesCount(count) {
  const gamesCount = document.querySelector('.games-count');
  if (gamesCount) {
    gamesCount.textContent = `${count} games`;
  }
}

function createNotificationContainer() {
  if (document.getElementById('notification-container')) return;
  
  const container = document.createElement('div');
  container.id = 'notification-container';
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    pointer-events: none;
  `;
  document.body.appendChild(container);
}

function showNotification(message, type = 'info') {
  const container = document.getElementById('notification-container');
  if (!container) return;
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    background: var(--primary-gradient);
    color: var(--text-primary);
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid var(--neon-cyan);
    box-shadow: 0 0 20px var(--neon-cyan);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    pointer-events: auto;
    font-size: 14px;
  `;
  notification.textContent = message;
  
  container.appendChild(notification);
  
  // 动画显示
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // 自动移除
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function toggleMobileMenu() {
  elements.navMenu?.classList.toggle('mobile-open');
  elements.mobileMenuToggle?.classList.toggle('active');
}

function handleKeyboard(e) {
  switch(e.key) {
    case 'Escape':
      // 关闭游戏模态框
      const gameModal = document.getElementById('game-modal');
      if (gameModal && gameModal.style.display === 'flex') {
        closeGameModal();
      }
      break;
    case 'F11':
      e.preventDefault();
      toggleMainGameFullscreen();
      break;
  }
}

function handleResize() {
  // Handle window resize
}

function handleScroll() {
  // Handle scroll events
}

// ============================================
// MAIN GAME FUNCTIONS
// ============================================

function startMainGame() {
  const overlay = document.querySelector('.game-overlay');
  const gameIframe = document.querySelector('.main-game-iframe');
  const overlayContent = document.querySelector('.overlay-content');
  
  if (!overlay || !gameIframe || !overlayContent) {
    console.error('Required elements not found');
    console.log('overlay:', !!overlay, 'gameIframe:', !!gameIframe, 'overlayContent:', !!overlayContent);
    return;
  }
  
  // Show loading state
  overlayContent.innerHTML = `
    <div class="loading-spinner">🎮</div>
    <p>LOADING GAME...</p>
    <p>Please wait while we prepare your gaming experience</p>
  `;
  
  // Get game URL - use gamesData if available, otherwise fallback
  let gameUrl = "https://www.miniplay.com/embed/subway-surfers"; // default fallback
  
  if (typeof gamesData !== 'undefined' && gamesData.length > 0) {
    const mainGame = gamesData.find(game => game.id === 1);
    if (mainGame && mainGame.iframeUrl) {
      gameUrl = mainGame.iframeUrl;
    }
  }
  
  // Set up iframe load event listeners
  const onLoad = () => {
    overlay.style.display = 'none';
    showNotification('Game loaded successfully! 🎮');
    cleanup();
  };
  
  const onError = () => {
    overlayContent.innerHTML = `
      <div style="color: #ff6b6b;">❌</div>
      <p>Failed to load game</p>
      <button class="neon-button" onclick="startMainGame()">Try Again</button>
      <button class="neon-button" onclick="resetMainGame()">Back</button>
    `;
    cleanup();
  };
  
  const cleanup = () => {
    gameIframe.removeEventListener('load', onLoad);
    gameIframe.removeEventListener('error', onError);
    clearTimeout(timeoutId);
  };
  
  // Add event listeners
  gameIframe.addEventListener('load', onLoad);
  gameIframe.addEventListener('error', onError);
  
  // Set timeout for loading
  const timeoutId = setTimeout(() => {
    onError();
  }, 10000);
  
  // Start loading the game
  gameIframe.src = gameUrl;
  showNotification('Starting main game: SUBWAY SURFERS');
}

function resetMainGame() {
  // 重置主游戏到初始状态
  const mainGameIframe = document.querySelector('.main-game-iframe');
  const gameOverlay = document.querySelector('.game-overlay');
  const overlayContent = document.querySelector('.overlay-content');
  
  if (mainGameIframe && gameOverlay && overlayContent) {
    // 停止加载iframe
    mainGameIframe.src = '';
    
    // 显示覆盖层
    gameOverlay.style.display = 'flex';
    gameOverlay.style.opacity = '1';
    gameOverlay.style.pointerEvents = 'auto';
    
    // 恢复原始内容
    overlayContent.innerHTML = `
      <h4 class="neon-text">CLICK TO START GAME</h4>
      <button class="neon-button play-overlay-btn" onclick="startMainGame()">
        ▶ START GAME
      </button>
      <div class="game-preview-info">
        <p>🎮 Ready to surf the subway?</p>
        <p>🏃‍♂️ Dodge trains and collect coins!</p>
      </div>
    `;
    
    showNotification('Game reset successfully', 'info');
  }
}

function toggleMainGameFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

// 添加关闭游戏模态框的函数
function closeGameModal() {
  const gameModal = document.getElementById('game-modal');
  const gameFrame = document.getElementById('game-iframe');
  
  if (gameModal) {
    gameModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
  }
  
  if (gameFrame) {
    gameFrame.src = ''; // 停止加载游戏
  }
  
  showNotification('Game closed, returning to home', 'info');
}

function handleSearch() {
  const searchTerm = elements.searchInput.value.toLowerCase();
  applyFilters(searchTerm);
}

function handleFilter() {
  const searchTerm = elements.searchInput ? elements.searchInput.value.toLowerCase() : '';
  applyFilters(searchTerm);
}

function handleSort() {
  const searchTerm = elements.searchInput ? elements.searchInput.value.toLowerCase() : '';
  applyFilters(searchTerm);
}

function applyFilters(searchTerm = '') {
  if (typeof gamesData === 'undefined') return;
  
  const category = elements.categoryFilter?.value || 'all';
  const sortBy = elements.sortFilter?.value || 'popular';
  
  // 筛选游戏
  let filteredGames = gamesData.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                         game.description.toLowerCase().includes(searchTerm) ||
                         game.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    const matchesCategory = category === 'all' || game.category === category;
    
    return matchesSearch && matchesCategory;
  });
  
  // 排序游戏
  switch (sortBy) {
    case 'rating':
      filteredGames.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      filteredGames.sort((a, b) => b.likes - a.likes);
      break;
    case 'name':
      filteredGames.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'newest':
      filteredGames.sort((a, b) => b.id - a.id);
      break;
    default:
      // 保持原顺序，精选游戏在前
      filteredGames.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      });
  }
  
  currentGames = filteredGames;
  if (typeof renderGames === 'function') {
    renderGames(currentGames);
  }
  updateGamesCount(currentGames.length);
}

// 添加相关辅助函数
function updateGameModalFavorite(gameId) {
  const favoriteBtn = document.querySelector('.game-modal .favorite-btn');
  if (favoriteBtn) {
    const isFavorited = favorites.includes(gameId);
    favoriteBtn.textContent = isFavorited ? '❤️' : '🤍';
    favoriteBtn.classList.toggle('favorited', isFavorited);
  }
}

function toggleGameFullscreen() {
  const gameFrame = document.querySelector('#game-iframe');
  if (gameFrame) {
    if (gameFrame.requestFullscreen) {
      gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) {
      gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
      gameFrame.msRequestFullscreen();
    }
  }
}

function reloadGame(gameId) {
  const game = gamesData.find(g => g.id === gameId);
  const gameFrame = document.querySelector('#game-iframe');
  const loadingOverlay = document.querySelector('.game-loading-overlay');
  
  if (game && gameFrame) {
    // 显示加载动画
    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
      loadingOverlay.innerHTML = `
        <div class="loading-spinner">🎮</div>
        <p>Reloading...</p>
      `;
    }
    
    // 重新加载游戏
    gameFrame.src = '';
    setTimeout(() => {
      gameFrame.src = game.iframeUrl;
    }, 500);
    
    showNotification('Reloading game...', 'info');
  }
} 