const setup = () => {
    let title = document.getElementsByTagName('h1')[0].textContent;
    let trigrams = getTrigrams(title);
    let pElement = makeElement(trigrams);
    displayElement(pElement);
}

const getTrigrams = text =>{
    let trigrams = [];
    let startIndex = 0;
    let endIndex = startIndex + 3;

    while(endIndex <= text.length){
        trigrams.push(text.slice(startIndex,endIndex));
        startIndex++;
        endIndex++;
    }

    return trigrams;
}

const makeElement = trigrams => {
    let pElement = document.createElement('p');
    let text = "";
    trigrams.forEach(trigram => text += trigram + "<br/>");
    pElement.innerHTML = text;
    return pElement;
}

const displayElement = element => {
    document.body.append(element);
}

window.addEventListener("load", setup);