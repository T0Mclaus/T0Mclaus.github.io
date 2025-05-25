const setup = () => {
    let cube = document.getElementById('cube');
    let cubeProps = {
        cubeWidth: 150,
        cubeHeigth: 150,
        xPos: 100,
        yPos: 0
    }
    cubeProps.xPos = (window.innerWidth - cubeProps.cubeWidth) / 2;
    cubeProps.yPos = (window.innerHeight - cubeProps.cubeHeigth) / 2;

    placeCube(cube,cubeProps);

    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(button => button.addEventListener('click',(target) => handleClickButtons(target,cube,cubeProps)));
}

const handleClickButtons = (e,cube,props) => {
    let direction = e.target.value;
    switch(direction){
        case 'left':
            props.xPos -= 100;
            break;
        case 'up':
            props.yPos -= 100;
            break;
        case 'down':
            props.yPos += 100;
            break;
        case 'right':
            props.xPos += 100;
            break;
    }
    checkBounds(props);
    placeCube(cube,props);
}

const checkBounds = props => {
    if((props.xPos + props.cubeWidth) > window.innerWidth){
        props.xPos = (window.innerWidth - props.cubeWidth);
    }
    if(props.xPos < 0){
        props.xPos = 0;
    }
    if((props.yPos + props.cubeHeigth) > window.innerHeight){
        props.yPos = (window.innerHeight - props.cubeHeigth);
    }
    if(props.yPos < 0){
        props.yPos = 0;
    }
}

const placeCube = (cube,props) => {
    cube.style.width = `${props.cubeWidth}px`;
    cube.style.height = `${props.cubeHeigth}px`;
    cube.style.left = `${props.xPos}px`;
    cube.style.top = `${props.yPos}px`;
}

window.addEventListener("load", setup);