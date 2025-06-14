document.addEventListener('DOMContentLoaded', () => {
    const btnAlterarAvatar = document.querySelector('.btn-alterar-avatar');
    const fileInput = document.getElementById('file-input');
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Funcionalidade para o botão "Alterar" (abrir galeria)
    btnAlterarAvatar.addEventListener('click', () => {
        fileInput.click(); // Simula o clique no input de arquivo oculto
    });

    // Lida com a seleção de arquivo
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Remove o "X" ou qualquer conteúdo anterior e mostra a imagem
                avatarPlaceholder.innerHTML = '';
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.borderRadius = '50%';
                img.style.objectFit = 'cover'; // Garante que a imagem cubra o círculo
                avatarPlaceholder.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

//MOSTRAR SENHA PERFIL ONG
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = ' 🕳️'
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = ' 	👁'
        }
    });
//ALTERAR DADOS PERFIL ONG
    const btnAlterarDados = document.querySelector('.btn-alterar-dados');
    btnAlterarDados.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Dados a serem alterados:', { username, password });
       
        alert('Dados alterados com sucesso!');
    });
});




//Alterar ponto

function alterarponto() {
    alert('Ponto alterado com sucesso!');
    window.location.href = './pontosdecoleta.html';
}

function adicionarponto() {
    alert('Ponto adicionado com sucesso!');
    window.location.href = './pontosdecoleta.html';
}