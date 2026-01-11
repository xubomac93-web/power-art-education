// Power国际艺术教育 - 主逻辑文件

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initMobileMenu();
  initCasesFilter();
  initSmoothScroll();
  initStatsAnimation();
  initFormValidation();
});

// Header 滚动效果
function initHeader() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 移动端菜单
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单
    navList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }
}

// 案例筛选
function initCasesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      
      // 更新按钮状态
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 筛选案例
      caseCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 数字统计动画
function initStatsAnimation() {
  const statsNumbers = document.querySelectorAll('.stats-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsNumbers.forEach(num => observer.observe(num));
}

function animateNumber(element) {
  const text = element.textContent;
  const hasPlus = text.includes('+');
  const hasPercent = text.includes('%');
  const number = parseInt(text.replace(/[^0-9]/g, ''));
  
  let current = 0;
  const increment = number / 50;
  const duration = 1500;
  const stepTime = duration / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    
    let display = Math.floor(current);
    if (hasPlus) display += '+';
    if (hasPercent) display += '%';
    element.textContent = display;
  }, stepTime);
}

// 表单验证
function initFormValidation() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = form.querySelector('input[name="name"]');
      const phone = form.querySelector('input[name="phone"]');
      const message = form.querySelector('textarea[name="message"]');
      
      let isValid = true;
      
      // 验证姓名
      if (!name.value.trim()) {
        showError(name, '请输入您的姓名');
        isValid = false;
      } else {
        clearError(name);
      }
      
      // 验证电话
      if (!phone.value.trim()) {
        showError(phone, '请输入联系电话');
        isValid = false;
      } else {
        clearError(phone);
      }
      
      // 验证咨询内容
      if (!message.value.trim()) {
        showError(message, '请输入咨询内容');
        isValid = false;
      } else {
        clearError(message);
      }
      
      if (isValid) {
        // 显示成功提示
        alert('提交成功！我们会尽快与您联系。');
        form.reset();
      }
    });
  }
}

function showError(input, message) {
  input.style.borderColor = '#e74c3c';
  let errorEl = input.parentElement.querySelector('.error-message');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    errorEl.style.cssText = 'color: #e74c3c; font-size: 12px; margin-top: 4px; display: block;';
    input.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearError(input) {
  input.style.borderColor = '';
  const errorEl = input.parentElement.querySelector('.error-message');
  if (errorEl) errorEl.remove();
}
