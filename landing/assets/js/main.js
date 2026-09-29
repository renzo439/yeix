/* =========================================================
   YEIX — Landing page interactions
   ========================================================= */
(function () {
  "use strict";

  /**
   * Single source of truth for YEIX's WhatsApp contact details.
   * -----------------------------------------------------------------
   * TODO: Replace WHATSAPP_NUMBER with the real number in
   * international format, digits only (e.g. "5491122334455").
   * Every element marked [data-whatsapp-link] in index.html gets its
   * href built from these constants automatically, so there is only
   * one place to update before publishing.
   */
  var WHATSAPP_NUMBER = "WHATSAPP_NUMBER";
  var WHATSAPP_MESSAGES = {
    general: "Hola YEIX, quiero recibir información y una cotización.",
    services: "Hola YEIX, quiero información y una cotización sobre sus servicios."
  };

  if (WHATSAPP_NUMBER === "WHATSAPP_NUMBER") {
    // eslint-disable-next-line no-console
    console.warn(
      "YEIX: WHATSAPP_NUMBER is still a placeholder in assets/js/main.js. " +
        "Set the real WhatsApp number before publishing this site."
    );
  }

  document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
    var messageKey = link.getAttribute("data-whatsapp-message") || "general";
    var message = WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.general;
    link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  });

  /**
   * Mobile navigation toggle.
   */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var mainNav = document.querySelector("[data-main-nav]");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after a nav link is used.
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /**
   * Keep the footer year up to date without manual edits.
   */
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
