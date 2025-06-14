//login recicla
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');

    if (showPasswordCheckbox && passwordInput) {
        showPasswordCheckbox.addEventListener('change', () => {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    }

    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const usernameEmail = document.getElementById('username-email').value;
            const password = document.getElementById('password').value;

            if (usernameEmail === '' || password === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            console.log('Username/Email:', usernameEmail);
            console.log('Password:', password);

            if (usernameEmail === 'cooperativas@fortes.com.br' && password === '123456') {
                alert('Login bem-sucedido!');
                window.location.href = './paginasrecicla/perfilrecicla.html';
            } else {
                alert('Login falhou. Por favor, verifique suas credenciais.');
            }

        });
    }
});















//login ong
document.addEventListener('DOMContentLoaded', () => {
    const passwordInputong = document.getElementById('password-ong');
    const showPasswordCheckboxong = document.getElementById('show-password-checkbox-ong');

    if (showPasswordCheckboxong && passwordInputong) {
        showPasswordCheckboxong.addEventListener('change', () => {
            if (showPasswordCheckboxong.checked) {
                passwordInputong.type = 'text';
            } else {
                passwordInputong.type = 'password';
            }
        });
    }



const loginFormong = document.querySelector('.login-ong form');
    if (loginFormong) {
        loginFormong.addEventListener('submit', (event) => {
            event.preventDefault();

            const usernameEmailong = document.getElementById('username-email-ong').value;
            const passwordong = document.getElementById('password-ong').value;

            if (usernameEmailong === '' || passwordong === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            console.log('Username/Email:', usernameEmailong);
            console.log('Password:', passwordong);

            if (usernameEmailong === 'admin@fortes.com.br' && passwordong === '123456') {
                alert('Login bem-sucedido!');
                window.location.href = './paginasong/perfilong.html';
            } else {
                alert('Login falhou. Por favor, verifique suas credenciais.');
            }

        });
    }});
