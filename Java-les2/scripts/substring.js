const setup = () => {
    let input = document.getElementsByName('textString')[0];
    let startIndex = document.getElementsByName('startIndex')[0];
    let endIndex = document.getElementsByName('endIndex')[0];

    document.getElementsByName('button')[0].addEventListener('click', () => handleClickButton(input,startIndex,endIndex));

}

const handleClickButton = (input, start, end) => {
    let outputElement = document.getElementById('output');
    let output = input.value.substring(start.value,end.value);

    outputElement.textContent = output;
}

window.addEventListener("load", setup);