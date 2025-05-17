const setup = () => {
    let selectElement = Array.from(document.getElementsByTagName('select'))[0];
    setBackground(selectElement.value);

    selectElement.addEventListener('change',(e) => handleClickOption(e));
}

const setBackground = value => {
    let bodyElement = document.body;
    switch(value){
        case 'dark':
            bodyElement.style.backgroundColor = "darkslategrey";
            break;
        case 'sky':
            bodyElement.style.backgroundColor = "skyblue";
            break;
        case 'light' :
            bodyElement.style.backgroundColor = "white";
            break;
    }
}

const handleClickOption = e => {
    setBackground(e.target.value);
}

window.addEventListener("load", setup);