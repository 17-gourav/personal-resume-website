// Shared JavaScript and jQuery interactions for all three pages.
function initializeInteractions() {
  // Mobile navigation: toggle the menu and keep its accessibility state current.
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a visitor selects a page.
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Delegate the print click so it works even when a nested button element
  // (such as its label or icon) is the click target. This listener is added once.
  document.addEventListener('click', function (event) {
    const target = event.target && event.target.closest
      ? event.target.closest('#print-resume')
      : null;
    if (target) window.print();
  });

  const introButton = document.querySelector('#intro-toggle');
  const introCopy = document.querySelector('#intro-copy');

  // jQuery examples: reveal sections and animate the Home introduction toggle.
  if (window.jQuery) {
    const $ = window.jQuery;
    const $reveals = $('.reveal');
    if ('IntersectionObserver' in window) {
      $reveals.addClass('is-pending');
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $(entry.target).addClass('is-visible'); // jQuery DOM manipulation
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      $reveals.each(function () { observer.observe(this); });
    } else {
      $reveals.addClass('is-visible');
    }

    $('#intro-toggle').on('click', function () { // jQuery click event handling
      const $copy = $('#intro-copy');
      const willShow = !$copy.is(':visible');
      $copy.stop(true, true).slideToggle(250); // jQuery show/hide animation
      $(this).attr('aria-expanded', String(willShow));
      $(this).html(willShow ? 'Hide introduction <span>−</span>' : 'Show introduction <span>+</span>');
    });
  } else if (introButton && introCopy) {
    // The Home control remains usable if the jQuery CDN is unavailable.
    introButton.addEventListener('click', function () {
      const willShow = introCopy.hidden;
      introCopy.hidden = !willShow;
      introButton.setAttribute('aria-expanded', String(willShow));
      introButton.textContent = willShow ? 'Hide introduction −' : 'Show introduction +';
    });
  }
}

// Support both normal page loading and scripts included after DOMContentLoaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeInteractions, { once: true });
} else {
  initializeInteractions();
}
