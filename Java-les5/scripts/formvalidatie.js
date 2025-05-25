const setup = () => {
    const formElements = {
        voornaam : {
            element : document.getElementById('voornaam'),
            errors: []
        },
        familienaam : {
            element : document.getElementById('familienaam'),
            errors: []
        },
        geboortedatum : {
            element : document.getElementById('geboortedatum'),
            errors: []
        },
        email : {
            element : document.getElementById('email'),
            errors: []
        },
        aantalKinderen : {
            element : document.getElementById('aantalKinderen'),
            errors: []
        }
    }

    document.getElementsByTagName('button')[0].addEventListener('click',() => valideerElementen(formElements));
}

const valideerElementen = formElements => {
    let {voornaam} = formElements;
    let {familienaam} = formElements;
    let {geboortedatum} = formElements;
    let {email} = formElements;
    let {aantalKinderen} = formElements;

    voornaam.errors = valideerVoornaam(voornaam.element);
    familienaam.errors = valideerFamilienaam(familienaam.element);
    geboortedatum.errors = valideerGeboortedatum(geboortedatum.element);
    email.errors = valideerEmail(email.element);
    aantalKinderen.errors = valideerAantalKinderen(aantalKinderen.element);

    displayErrors(formElements);
}

const displayErrors = formElements => {
    const inputElements = Array.from(document.getElementsByTagName('input'));
    inputElements.forEach(element => {
        let hasErrors = formElements[element.name].errors.length > 0;
        let span = element.nextSibling;
        span.innerHTML = "";
        if(hasErrors){
            element.classList.add('error');
            formElements[element.name].errors.forEach(error => {
                span.innerHTML += error + "<br/>"
            });
        }else{
            if(element.classList.contains('error')){
                element.classList.remove('error');
            }
        }
    })
}

const valideerVoornaam = input => {
    let errors = [];

    if(input.value.length > 30){
      errors.push("max. 30 karakters");
    }
    return errors;
}

const valideerFamilienaam = input => {
    let errors = [];

    if(!input.value){
        errors.push("verplicht veld");
    }
    if(input.value.length > 50){
        errors.push("Max 50 karakters");
    }
    return errors;
}

const valideerGeboortedatum = input => {
    let errors = [];
    if(!input.value){
        errors.push("verplicht veld")
    }
    if(!checkIfDate(input.value)){
       errors.push("formaat is niet jjjj-mm-dd");
    }
    return errors;
}

const valideerEmail = input => {
    let errors = [];
    if(!input.value){
        errors.push("Verplicht veld")
    }
    if(!heeftApenstaartje(input.value)){
        errors.push("geen geldig email adres");
    }

    return errors;
}

const valideerAantalKinderen = input => {
    let errors = [];
    if(!isGetal(input.value) || parseInt(input.value) < 0){
        errors.push("Geen positief getal");
    }
    if(parseInt(input.value) > 99){
        errors.push("Te vruchtbaar");
    }

    return errors;
}

const heeftApenstaartje = text => {
    let aantalApenstaartjes = 0;

    while(text.indexOf('@') > 0){
        let idx = text.indexOf('@');
        text = text.slice(idx + 1,text.length);

        aantalApenstaartjes++;
    }

    return aantalApenstaartjes === 1;
}

const checkIfDate = text => {
    let idx = text.indexOf('-');
    if(idx === 4){
        idx = text.indexOf('-', idx + 1);
        if(idx === 7){
            return true;
        }
        return false;
    }else{
        return false;
    }
}

const isGetal = text => {
    return !isNaN(parseInt(text));
}

window.addEventListener("load", setup);