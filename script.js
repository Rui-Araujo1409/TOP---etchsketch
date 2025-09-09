let medidaContentor = 500;
let num = 5;
let botão = document.querySelector("#botão");

const quadrados = () => {
    num = parseInt(prompt("Insira um número até 99: "));
    if (num > 0 && num < 100) {
        console.log(num);
        return num;
    } else {
        alert("Inseriu um valor não aceite.");
    }
}

botão.addEventListener("click", quadrados);

let limite = num * num;
let medidaItem = (medidaContentor / num) - 2;
const contentor = document.querySelector(".contentor");
contentor.style.width = `${medidaContentor}px`;

let numAleatório = Math.floor((Math.random()) * 255) + 1;

for (i = 1; i <= limite; i++) {
    let div = document.createElement("div");
    let num1 = Math.floor((Math.random()) * 255) + 1, num2 = Math.floor((Math.random()) * 255) + 1, num3 = Math.floor((Math.random()) * 255) + 1
    div.setAttribute("class", "quadrado");
    div.style.height = `${medidaItem}px`;
    div.style.width = `${medidaItem}px`;
    contentor.appendChild(div);
    div.addEventListener("mouseenter", (e) => {
        div.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    })
    div.addEventListener("mouseleave", (e) => {
        div.style.backgroundColor = "white";
    })
}

