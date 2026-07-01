document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".work-item").forEach((item) => {
    const video = item.querySelector(".work-video");

    if (!video) return;

    item.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    item.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  const sections = document.querySelectorAll(
    ".work, .services, .cta, .about, .footer, .about-intro, .founding, .approach, .founder, .form, .contactus, .services-page, .detail-row, .process, .services-intro, .intro",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const items = entry.target.querySelectorAll(".fade-up");

        items.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("show");
          }, index * 200);
        });

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    },
  );

  sections.forEach((section) => observer.observe(section));

  const toggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-overlay");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
  });
});
