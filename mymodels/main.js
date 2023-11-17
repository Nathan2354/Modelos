import dados from "./modelos.json" assert {type:"json"};

dados.forEach((modelo) => {

    const div = document.createElement("div");
    div.classList.add("modelo");

    if (modelo.genero == "masculino") {
        div.classList.add("masc");

    } else {
        div.classList.add("femi");
    }

    div.innerHTML = `
        <h3>${modelo.nome}</h3>
        <h3>${modelo.idade} anos</h3>
        <h3>${modelo.altura} m</h3>
        <h3>${modelo.peso} kg</h3>
        <h3>${modelo.nacionalidade}</h3>
    `;

    document.querySelector(".modelos").append(div);
});
