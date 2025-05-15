
// Основен скрипт за чат, регистрация и създаване на обяви

document.addEventListener("DOMContentLoaded", () => {
    // Чат
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");

    chatForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            const p = document.createElement("p");
            p.textContent = `Вие: ${message}`;
            chatBox.appendChild(p);
            chatInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    // Регистрация
    const registerForm = document.getElementById("register-form");
    registerForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("new-email").value;
        const username = document.getElementById("new-username").value;
        const password = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Паролите не съвпадат.");
            return;
        }

        alert(`Регистрирахте се успешно с потребителско име: ${username}`);
        registerForm.reset();
    });

    // Създаване на обява
    const adForm = document.getElementById("ad-form");
    const adsList = document.getElementById("ads-list");

    adForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;

        const adCard = document.createElement("div");
        adCard.className = "job-card";
        adCard.innerHTML = `<h3>${title}</h3><p>${description}</p><small>Категория: ${category}</small>`;

        adsList.appendChild(adCard);
        adForm.reset();
    });
});
