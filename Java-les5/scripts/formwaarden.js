const setup = () => {
    let elements = getFormElements();
    document.getElementsByTagName('button')[0].addEventListener('click',() => handleClickButton(elements));
}

const handleClickButton = elements => {
    let elementValues = getValues(elements);
    elementValues.forEach(value => console.log(value));
}

const getValues = elements => {
    let isRoker = elements[0].checked ? "is een roker" : "is geen roker";
    let moedertaal = "moedertaal is ";
    elements[1].forEach(radio => radio.checked? moedertaal += radio.value : null);
    let buurland = "Favoriete buurland is " + elements[2].options[elements[2].options.selectedIndex].value;
    let bestelling = "bestelling bestaat uit";
    Array.from(elements[3].options).forEach(option => {
        if(option.selected){
            bestelling += " " + option.value;
        }
    });

    let values = [isRoker,moedertaal,buurland,bestelling];
    return values;
}

const getFormElements = () => {
    let checkRoker = document.getElementById("checkRoker");
    let radioMoedertaal = document.getElementsByName('moedertaal');
    let selectBuurland = document.getElementById('selectBuurland');
    let selectBestelling = document.getElementById('listBestelling');

    let elements = [checkRoker,radioMoedertaal,selectBuurland,selectBestelling];
    return elements;
}

window.addEventListener("load", setup);