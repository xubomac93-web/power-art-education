// Power国际艺术教育

document.addEventListener('DOMContentLoaded', function() {
  // 数字动画
  const counts = document.querySelectorAll('.count');
  let animated = false;

  function animateCounts() {
    if (animated) return;
    
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;
    
    const rect = statsBar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      animated = true;
      
      counts.forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 1500;
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

  window.addEventListener('scroll', animateCounts);
  animateCounts();

  // 课程 Tab 切换
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(tabId)?.classList.add('active');
    });
  });

  // 案例筛选
  const caseTabs = document.querySelectorAll('.case-tab');
  const caseCards = document.querySelectorAll('.case-card');

  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      
      caseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      caseCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 表单提交
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('提交成功！我们的顾问将尽快与您联系。');
      form.reset();
    });
  }

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = document.querySelector('.header').offsetHeight;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
});
