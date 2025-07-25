// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення
// в span#name - output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній
// або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputIt = document.querySelector("#name-input");
const outputIt = document.querySelector("#name-output");

inputIt.addEventListener("input", () => {
    const trimmedValue = inputIt.value.trim();
    outputIt.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
