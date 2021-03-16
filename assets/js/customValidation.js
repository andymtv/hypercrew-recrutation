document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("INPUT, TEXTAREA, LABEL");
    for (let i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            console.log(elements);
            e.preventDefault();
            if (!e.target.validity.valid) {
                console.log(e.target);
                if (e.target.classList.contains('footer-form--input-name')) {
                    e.target.placeholder = 'Podaj imię';
                    e.target.classList.add('required-field');
                }

                if (e.target.classList.contains('footer-form--input-email')) {
                    e.target.placeholder = 'Podaj adres e-mail';
                    e.target.classList.add('required-field');
                }

                if (e.target.classList.contains('footer-form--input-phone')) {
                    e.target.placeholder = 'Podaj  numer telefonu';
                    e.target.classList.add('required-field');
                }

                if (e.target.classList.contains('footer-form--textarea-message')) {
                    e.target.placeholder = 'Wpisz wiadomość';
                    e.target.classList.add('required-field');
                }

                if (e.target.classList.contains('footer-form--checkbox')) {
                    console.log(document.querySelector('.footer-form--checkbox-custom-label'));
                    document.querySelector('.footer-form--checkbox-custom-label').style.backgroundImage = 'none';
                    document.querySelector('.footer-form--checkbox-custom-label').style.border = '1px solid #fb4d3d';
                }
            }
        };
        elements[i].onfocus = function(e) {
            if (e.target.classList.contains('footer-form--input-name')) {
                e.target.placeholder = 'Imię';
                e.target.classList.remove('required-field');
            }

            if (e.target.classList.contains('footer-form--input-email')) {
                e.target.placeholder = 'Adres e-mail';
                e.target.classList.remove('required-field');
            }

            if (e.target.classList.contains('footer-form--input-phone')) {
                e.target.placeholder = 'Telefon';
                e.target.classList.remove('required-field');
            }

            if (e.target.classList.contains('footer-form--textarea-message')) {
                e.target.placeholder = 'Wiadomość';
                e.target.classList.remove('required-field');
            }

            if (e.target.classList.contains('footer-form--checkbox')) {
                document.querySelector('.footer-form--checkbox-custom-label').style.backgroundImage = 'url(assets/img/checkbox.png)';
                document.querySelector('.footer-form--checkbox-custom-label').style.border = 'none';
            }
        };
    }

})