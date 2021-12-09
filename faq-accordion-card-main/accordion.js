const faqItems = document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', (event) => {
    item.parentNode.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});
