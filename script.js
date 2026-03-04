document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.accordion').forEach(elm => {
          const button = elm.querySelector('.toggle-button');
          const content = elm.querySelector('.content');
          const arrowIcon = elm.querySelector('.arrow');

          button.addEventListener('click', () => {
            const isHidden = content.classList.toggle('invisible');
            content.style.maxHeight = isHidden ? '0px' : `${content.scrollHeight + 100}px`;
            content.classList.toggle('pb-5', !isHidden);
            button.classList.toggle('font-semibold', !isHidden);
            button.classList.toggle('font-medium', isHidden);
            elm.classList.toggle('bg-[#CA0018]/90');
            arrowIcon.classList.toggle('-rotate-180', !isHidden)
            arrowIcon.classList.toggle('-rotate-90', isHidden)
          });
        });
      });

  // Initialize EmailJS
  emailjs.init("46o7LoD8ypcskuu6g");

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
      "service_gc5xm2j",
      "template_f22jufr",
      this
    )
    .then(function () {
      alert("Message sent successfully ✅");
      form.reset();
      button.innerText = "Send message";
      button.disabled = false;
    }   )
    .catch(function (error) {
      alert("Failed to send ❌");
      console.error(error);
      button.innerText = "Send message";
      button.disabled = false;
    });
  });
