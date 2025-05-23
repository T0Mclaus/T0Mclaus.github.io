const setup = () => {
    let pText = document.getElementsByTagName('p')[0].textContent;
    berekenAantalAn(pText);
}

const berekenAantalAn = pText => {
    let nextIndex = 0;
    let aantalAn = 0;

    while(nextIndex >= 0){
        nextIndex = pText.indexOf('an',nextIndex + 1);
        aantalAn++;
    }

    let textstring = pText;
    let aantalAn2 = 0;
    let endIndex = textstring.length;

    while(endIndex > 0){
        endIndex = textstring.lastIndexOf('an');
        textstring = textstring.substring(0,endIndex);
        aantalAn2++;
    }


    console.log(aantalAn2);

   output(aantalAn);
}

const output = aantal => {
    let pElement = document.createElement('p');
    pElement.textContent = `De naam "An" staat maar liefst ${aantal} keer in deze zin.`;
    document.body.append(pElement);
}

window.addEventListener("load", setup);