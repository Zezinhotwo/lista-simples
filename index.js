

document.addEventListener('DOMContentLoaded', () => {
    // Carregar todos os produtos armazenados no localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const produtoArmazenado = localStorage.getItem(chave);
        colocarLista(chave, produtoArmazenado);
    }
});

const adicionar = document.getElementById('adicionar');
const produtoInput = document.getElementById('produto');

adicionar.addEventListener('click', (e) => {
    e.preventDefault();
    const produtoValue = produtoInput.value;

    // Verifica se o produto já está na lista
    if (!localStorage.getItem(produtoValue)) {
        localStorage.setItem(produtoValue, produtoValue);
        colocarLista(produtoValue, produtoValue);
    } else {
        alert('Produto já está na lista');
    }
});

function colocarLista(chave, produtoValue) {
    const novoElemento = document.createElement('div');
    novoElemento.textContent = produtoValue;

    // Criar o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', () => {
        // Remover do localStorage
        localStorage.removeItem(chave);
        // Remover do DOM
        novoElemento.remove();
    });

    novoElemento.appendChild(botaoRemover);
    document.body.appendChild(novoElemento);
}
const img = document.createElement('img');
img.classList.add('image');
const hora = new Date();

console.log(hora.getHours(), hora.getMinutes());
console.log(hora);

if (hora.getHours() >= 6 && hora.getHours() < 12) {
    // Manhã: 6h - 11h59
    img.src = "https://i.pinimg.com/564x/cc/8e/c7/cc8ec72adee65670d2b0c7998ce84499.jpg";
    document.body.appendChild(img);
} else if (hora.getHours() >= 12 && hora.getHours() < 18) {
    // Tarde: 12h - 17h59
    img.src = "https://i.pinimg.com/564x/70/ff/48/70ff48e6fbda4396665709d300531977.jpg";
    document.body.appendChild(img);
} else {
    // Noite: 18h - 5h59
    img.src = "https://i.pinimg.com/564x/d6/5f/9c/d65f9c3f2a617ef448a4fc080be1799a.jpg";
    document.body.appendChild(img);
}
