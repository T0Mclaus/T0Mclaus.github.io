const setup = () => {
    let zin = document.getElementsByTagName('h2')[0].textContent;
    let nieuweZin = vervangLidwoorden(zin);
    zetOpPagina(nieuweZin);
    let zin2 = 'de man riep de';
    let nieuweZin2 = vervangLidwoorden(zin2);
    let h3element = document.createElement('h3');
    h3element.textContent = nieuweZin2;
    document.body.append(h3element);
}

const vervangLidwoorden = zin => {
    return zin.replaceAll('de','het');
}

const zetOpPagina = zin => {
    let h3Element = document.getElementsByTagName('h3')[0];
    h3Element.textContent = zin;
}

window.addEventListener("load", setup);