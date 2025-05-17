const setup = () => {
    let sliders = document.querySelectorAll("input[type='range']");
    let colorValues = makeColorArray(sliders);

    let swatch = document.getElementById("swatch");
    setSwatch(colorValues,swatch);

    let values = document.querySelectorAll('.value');
    setValues(colorValues,values);

    sliders.forEach(slider => slider.addEventListener('input',() => handleChangeSlider(swatch,values,sliders,colorValues)));
}

const makeColorArray = sliders => {
    let colors = [];
    sliders.forEach((slider,index) => colors[index] = slider.value);
    return colors;
}

const setSwatch = (colors, swatch) => {
    swatch.style.backgroundColor = `rgb( ${colors[0]},${colors[1]} , ${colors[2]})`;
}

const setValues = (color,elements) => {
    elements.forEach((element,index) => element.textContent = color[index]);
}

const handleChangeSlider = (swatch, valueElements, sliders) => {
    let colors = makeColorArray(sliders);
    setSwatch(colors,swatch);
    setValues(colors,valueElements);
}

window.addEventListener("load", setup);