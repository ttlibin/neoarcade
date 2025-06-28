// ============================================
// NEO ARCADE - VISUAL EFFECTS & ANIMATIONS
// ============================================

// ============================================
// NEON EFFECTS CONTROLLER
// ============================================

class NeonEffects {
  constructor() {
    this.isInitialized = false;
    this.animationSpeed = 1;
    this.glitchIntensity = 0.5;
    this.init();
  }

  init() {
    if (this.isInitialized) return;
    
    this.setupGridAnimation();
    this.setupNeonFlicker();
    this.setupGlitchEffects();
    this.setupParticleBackground();
    this.setupScrollEffects();
    this.setupHoverEffects();
    
    this.isInitialized = true;
  }

  // ============================================
  // GRID BACKGROUND ANIMATION
  // ============================================

  setupGridAnimation() {
    const gridBg = document.querySelector('.grid-background');
    if (!gridBg) return;

    // 创建动态网格线条
    this.createDynamicGrid();
    
    // 添加鼠标跟随效果
    this.addMouseFollowEffect();
  }

  createDynamicGrid() {
    const canvas = document.createElement('canvas');
    canvas.id = 'grid-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    `;
    
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const drawGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const pulse = Math.sin(time * 0.001) * 0.3 + 0.7;
      
      ctx.strokeStyle = `rgba(148, 0, 211, ${pulse * 0.3})`;
      ctx.lineWidth = 1;
      
      // 垂直线
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // 水平线
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      animationId = requestAnimationFrame(drawGrid);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawGrid(0);
    
    // 页面隐藏时停止动画
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        drawGrid(performance.now());
      }
    });
  }

  addMouseFollowEffect() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // 创建鼠标跟随光晕
      this.createMouseGlow(mouseX, mouseY);
    });
  }

  createMouseGlow(x, y) {
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    glow.style.cssText = `
      position: fixed;
      left: ${x - 50}px;
      top: ${y - 50}px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, transparent 70%);
      pointer-events: none;
      z-index: -1;
      animation: fadeOut 1s ease-out forwards;
    `;
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    }, 1000);
  }

  // ============================================
  // NEON FLICKER EFFECTS
  // ============================================

  setupNeonFlicker() {
    const neonElements = document.querySelectorAll('.neon-text');
    
    neonElements.forEach(element => {
      this.addFlickerEffect(element);
    });
  }

  addFlickerEffect(element) {
    const originalColor = getComputedStyle(element).color;
    const flickerChance = 0.1; // 10% 概率闪烁
    
    setInterval(() => {
      if (Math.random() < flickerChance) {
        element.style.opacity = '0.8';
        element.style.textShadow = 'none';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.textShadow = '';
        }, 50 + Math.random() * 100);
      }
    }, 2000 + Math.random() * 3000);
  }

  // ============================================
  // GLITCH EFFECTS
  // ============================================

  setupGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
      this.addGlitchEffect(element);
    });
  }

  addGlitchEffect(element) {
    const originalText = element.textContent;
    element.dataset.text = originalText;
    
    setInterval(() => {
      if (Math.random() < 0.05) { // 5% 概率故障
        this.triggerGlitch(element, originalText);
      }
    }, 1000);
  }

  triggerGlitch(element, originalText) {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const duration = 100 + Math.random() * 200;
    const intensity = this.glitchIntensity;
    
    let glitchedText = '';
    for (let i = 0; i < originalText.length; i++) {
      if (Math.random() < intensity) {
        glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      } else {
        glitchedText += originalText[i];
      }
    }
    
    element.textContent = glitchedText;
    element.style.transform = `translate(${(Math.random() - 0.5) * 4}px, ${(Math.random() - 0.5) * 2}px)`;
    
    setTimeout(() => {
      element.textContent = originalText;
      element.style.transform = '';
    }, duration);
  }

  // ============================================
  // PARTICLE BACKGROUND
  // ============================================

  setupParticleBackground() {
    const particleCanvas = document.createElement('canvas');
    particleCanvas.id = 'particle-canvas';
    particleCanvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      pointer-events: none;
    `;
    
    document.body.insertBefore(particleCanvas, document.body.firstChild);
    
    this.initParticles(particleCanvas);
  }

  initParticles(canvas) {
    const ctx = canvas.getContext('2d');
    const particles = [];
    const maxParticles = 50;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.005;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '255, 20, 147' : '0, 255, 255';
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = `rgba(${this.color}, ${this.life})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加发光效果
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, ${this.life})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    
    const createParticle = () => {
      if (particles.length < maxParticles) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 创建新粒子
      if (Math.random() < 0.1) {
        createParticle();
      }
      
      // 更新和绘制粒子
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
  }

  // ============================================
  // SCROLL EFFECTS
  // ============================================

  setupScrollEffects() {
    this.setupParallax();
    this.setupScrollReveal();
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.addRevealAnimation(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }

  addRevealAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  }

  // ============================================
  // HOVER EFFECTS
  // ============================================

  setupHoverEffects() {
    this.setupButtonHovers();
    this.setupCardHovers();
  }

  setupButtonHovers() {
    const buttons = document.querySelectorAll('.neon-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.createRippleEffect(e);
        this.addButtonGlow(button);
      });
      
      button.addEventListener('mouseleave', () => {
        this.removeButtonGlow(button);
      });
    });
  }

  createRippleEffect(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255, 20, 147, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  addButtonGlow(button) {
    button.style.boxShadow = '0 0 30px rgba(255, 20, 147, 0.8)';
    button.style.transform = 'translateY(-3px)';
  }

  removeButtonGlow(button) {
    button.style.boxShadow = '';
    button.style.transform = '';
  }

  setupCardHovers() {
    const cards = document.querySelectorAll('.game-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addCardTilt(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.removeCardTilt(card);
      });
      
      card.addEventListener('mousemove', (e) => {
        this.updateCardTilt(card, e);
      });
    });
  }

  addCardTilt(card) {
    card.style.transition = 'transform 0.1s ease';
  }

  removeCardTilt(card) {
    card.style.transform = '';
    card.style.transition = 'transform 0.3s ease';
  }

  updateCardTilt(card, e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }
}

// ============================================
// SPECIAL EFFECTS
// ============================================

class SpecialEffects {
  static createExplosion(x, y, color = '#ff1493') {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
      position: fixed;
      left: ${x - 25}px;
      top: ${y - 25}px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle, ${color} 0%, transparent 70%);
      transform: scale(0);
      animation: explode 0.5s ease-out forwards;
      pointer-events: none;
      z-index: 10000;
    `;
    
    document.body.appendChild(explosion);
    
    setTimeout(() => {
      if (explosion.parentNode) {
        explosion.parentNode.removeChild(explosion);
      }
    }, 500);
  }

  static createFloatingText(text, x, y, color = '#00ffff') {
    const floatingText = document.createElement('div');
    floatingText.textContent = text;
    floatingText.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      color: ${color};
      font-weight: bold;
      font-size: 1.2rem;
      pointer-events: none;
      z-index: 10000;
      transform: translateY(0);
      opacity: 1;
      animation: floatUp 2s ease-out forwards;
      text-shadow: 0 0 10px ${color};
    `;
    
    document.body.appendChild(floatingText);
    
    setTimeout(() => {
      if (floatingText.parentNode) {
        floatingText.parentNode.removeChild(floatingText);
      }
    }, 2000);
  }

  static createScreenShake(duration = 300, intensity = 5) {
    const originalTransform = document.body.style.transform;
    let start = null;
    
    const shake = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      
      if (elapsed < duration) {
        const x = (Math.random() - 0.5) * intensity;
        const y = (Math.random() - 0.5) * intensity;
        document.body.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(shake);
      } else {
        document.body.style.transform = originalTransform;
      }
    };
    
    requestAnimationFrame(shake);
  }
}

// ============================================
// CSS ANIMATIONS (动态添加)
// ============================================

function addDynamicStyles() {
  if (document.getElementById('dynamic-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'dynamic-styles';
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.8); }
    }
    
    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }
    
    @keyframes explode {
      0% { transform: scale(0); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.8; }
      100% { transform: scale(3); opacity: 0; }
    }
    
    @keyframes floatUp {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-50px); opacity: 0; }
    }
    
    .loading-shimmer {
      background: linear-gradient(90deg, 
        rgba(148, 0, 211, 0.1) 25%, 
        rgba(148, 0, 211, 0.3) 50%, 
        rgba(148, 0, 211, 0.1) 75%);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .reveal-on-scroll.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  
  document.head.appendChild(style);
}

// ============================================
// INITIALIZATION
// ============================================

let neonEffects;

document.addEventListener('DOMContentLoaded', () => {
  addDynamicStyles();
  neonEffects = new NeonEffects();
  
  // 为所有游戏卡片添加reveal类
  setTimeout(() => {
    document.querySelectorAll('.game-card').forEach(card => {
      card.classList.add('reveal-on-scroll');
    });
  }, 1000);
});

// ============================================
// EXPORT EFFECTS
// ============================================

window.EffectsModule = {
  NeonEffects,
  SpecialEffects,
  neonEffects: () => neonEffects
}; 