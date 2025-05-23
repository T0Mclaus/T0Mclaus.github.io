const setup = () => {
    const submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click',handleClickButton);
}

const handleClickButton = () => {
    let text = document.getElementById('text').value;
    let gespatieerdeText = scheidtCharacters(text);
    console.log(gespatieerdeText);
}

const scheidtCharacters = text => {
   let newText = text.replaceAll('',' ');
   return newText;
}

window.addEventListener("load", setup);