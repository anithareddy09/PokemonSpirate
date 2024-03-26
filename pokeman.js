const container = document.querySelector("section");
const baseurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (let i = 1; i <= 151; i++) {
    const pokeman = document.createElement("div");
    const newspan = document.createElement("span");
    pokeman.classList.add("pokeman");
    newspan.innerText = `#${i}`;
    const newimg = document.createElement("img");
    newimg.src = `${baseurl}${i}.png`
    pokeman.appendChild(newimg);
    pokeman.appendChild(newspan);
    container.appendChild(pokeman);
}


