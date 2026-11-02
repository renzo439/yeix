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
   *
   * Note: like any wa.me link, this number is sent to every visitor's
   * browser and is publicly visible in the page source — this is not
   * a secret and should never hold sensitive credentials.
   */
  var WHATSAPP_NUMBER = "543884105012";
  var WHATSAPP_MESSAGES = {
    general: "Hola YEIX, quiero recibir información y una cotización.",
    services: "Hola YEIX, quiero información y una cotización sobre sus servicios."
  };

  var isConfigured = WHATSAPP_NUMBER !== "";

  if (!isConfigured) {
    // eslint-disable-next-line no-console
    console.warn(
      "YEIX: WHATSAPP_NUMBER is still a placeholder in assets/js/main.js. " +
        "Set the real WhatsApp number before publishing this site."
    );
  }

  document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
    var messageKey = link.getAttribute("data-whatsapp-message") || "general";
    var message = WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.general;

    if (isConfigured) {
      link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
      return;
    }

    // Avoid sending visitors to a broken wa.me link while the number
    // hasn't been configured yet: keep the link inert instead. The
    // href stays "#" (safe no-op) and tabindex is removed so keyboard
    // users can't focus/activate it before JS has run.
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.classList.add("is-disabled");
    link.setAttribute(
      "title",
      "WhatsApp aún no está configurado. Definí WHATSAPP_NUMBER en assets/js/main.js."
    );
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  if (!isConfigured) {
    var configBanner = document.querySelector("[data-config-banner]");
    if (configBanner) {
      configBanner.hidden = false;
    }
  }

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
