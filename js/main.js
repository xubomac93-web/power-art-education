// Power国际艺术教育 - 主脚本

document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.header');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      header.classList.toggle('nav-open');
      menuToggle.classList.toggle('active');
    });
  }

  // 导航高亮
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);

  // 数字动画
  const countElements = document.querySelectorAll('.count');
  let counted = false;
  
  function animateCount() {
    if (counted) return;
    
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;
    
    const rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counted = true;
      
      countElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 16);
      });
    }
  }
  
  window.addEventListener('scroll', animateCount);
  animateCount();

  // 案例筛选
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      caseCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 表单提交
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const name = formData.get('name');
      const phone = formData.get('phone');
      
      if (!name || !phone) {
        alert('请填写姓名和电话');
        return;
      }
      
      const submitBtn = this.querySelector('.btn-submit');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>提交中...</span>';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('提交成功！我们的顾问将尽快与您联系。');
        this.reset();
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // 平滑滚动
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
        
        header.classList.remove('nav-open');
        menuToggle?.classList.remove('active');
      }
    });
  });

  // 滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.school-card, .course-card, .case-card, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
