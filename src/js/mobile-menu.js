(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  var $hamburger = $('.hamburger');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  $('.close').on('click', e => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    $hamburger.toggleClass('is-active');
  });

  // $('#about-cl', '#program-cl', '#register-cl', '#contact-cl').on('click', e => {
  //   $(this).on('click', e => {
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  //   $hamburger.toggleClass('is-active');
  //  });
  // });

  $hamburger.on('click', function (e) {
    $hamburger.toggleClass('is-active');
  });
})();
