const setup = () => {
    let selectElement = document.getElementById('gemeenteSelect');
    toggleDisplay(selectElement,"hidden");
    let gemeenten = promptGemeenten();
    makeSelectOptions(selectElement,gemeenten);
    toggleDisplay(selectElement,"visible");

}

const toggleDisplay = (element,value) => {
    element.style.visibility = value;
}

const promptGemeenten = () => {
    let gemeenten = [];
    let gemeente = "";

    while(gemeente.localeCompare('stop') !== 0){
        if(gemeente){
            gemeenten.push(gemeente);
        }
        gemeente = window.prompt("Voer een gemeente in");
    }
    return gemeenten.sort(sorteerOpAlfabet);
}

const sorteerOpAlfabet = (a,b) => {
    return a.localeCompare(b);
}

const makeOptionElement = value => {
    const element = document.createElement('option');
    element.textContent = value;
    return element;
}

const makeSelectOptions = (element,values) => {
    values.forEach(value => element.append(makeOptionElement(value)));
}

window.addEventListener("load", setup);