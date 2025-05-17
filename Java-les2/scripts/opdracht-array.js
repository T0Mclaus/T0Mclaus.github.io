const setup = () => {
    let familieLeden = ["Caroline", "Johan", "Liesbeth", "Toulouse", "Bolt"];
    familieLeden.forEach((value,index) => {index%2 === 0 ? console.log(value) : null});

    //voegFamilielidToe(familieLeden);

    let familie = 'Familieleden: ' + familieLeden.join(', ');
    console.log(familie);
    //welkom();

    let btnKopieer = document.getElementById('btnKopieer');
    btnKopieer.addEventListener('click',kopieer);
}

const voegFamilielidToe = leden => {
    let nieuwLid = window.prompt("Geef de naam van een familielid");
    leden.push(nieuwLid);
}

//OPDRACHT 3 - 5
const handleClickButton = p => {
    p.innerHTML = "Welkom!";
}

//OPDRACHT 6
const kopieer = () => {
    let input = document.getElementById('txtInput').value;
    let output = document.getElementById('txtOutput');
    output.textContent = input;
}

const welkom = () => {
    let pElement = document.getElementById("textOutput");
    let button = document.createElement('button');
    let buttonText = document.createTextNode('wijzig');
    button.append(buttonText);
    button.addEventListener('click',() => handleClickButton(pElement));
    pElement.after(button);
}

window.addEventListener("load", setup);