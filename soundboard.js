const setup = () => {
    console.log("hallo");
    let audioElements = document.querySelectorAll("audio");
    audioElements.forEach(element => element.style.display = "none");

    let divs = document.querySelectorAll('.button');
    divs.forEach(element => {
        let file = element.getAttribute("data-file");
        console.log(file);
        
        element.addEventListener("click",() => handleClickDiv(file,audioElements));
    })
}

const handleClickDiv = (tag, audioElements) => {
    audioElements.forEach(audioE => {
        audioE.pause();
        audioE.load();
    });
    let audiofile = document.getElementById(tag);
    audiofile.play();
}

window.addEventListener("load",setup);