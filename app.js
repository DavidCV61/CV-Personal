document.addEventListener('DOMContentLoaded', function() {

  var txt_name = 'David Ca\u00f1edo V\u00e9rtiz';
  var txt_info = 'Junior Full Stack & Cloud Engineer | Open Source Enthusiast';
  var speed_name = 70;
  var speed_desc = 30;

  var nombre = document.getElementById('tipear_nombre');
  var descri = document.getElementById('tipear_descri');
  var cmd2 = document.getElementById('cmd2');
  var socialLinks = document.getElementById('social_links');

  var nameIdx = 0;
  var descIdx = 0;

  function typeName() {
    nameIdx++;
    nombre.innerHTML = txt_name.substring(0, nameIdx) + '<span class="cursor-blink"></span>';
    if (nameIdx < txt_name.length) {
      setTimeout(typeName, speed_name);
    } else {
      nombre.innerHTML = txt_name;
      setTimeout(function() {
        cmd2.style.display = 'block';
        setTimeout(typeDesc, 300);
      }, 400);
    }
  }

  function typeDesc() {
    descri.textContent = txt_info.substring(0, descIdx + 1);
    descIdx++;
    if (descIdx < txt_info.length) {
      setTimeout(typeDesc, speed_desc);
    } else {
      if (socialLinks) {
        socialLinks.style.opacity = '1';
      }
    }
  }

  typeName();

  // SCROLL FADE IN
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .skill-category, .contact-card, .timeline-item').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ACTIVE NAV
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.texto-nav[href^="#"]');

  window.addEventListener('scroll', function() {
    var current = '';
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--color-lima)';
      }
    });
  });

});
