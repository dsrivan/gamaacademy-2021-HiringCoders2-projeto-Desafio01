const button = document.querySelector('.button button');
button.addEventListener('click', fnPreSubmit);

function fnPreSubmit(e) {
    e.preventDefault();
    return fnValidateForm();

}

function fnValidateForm() {
    let nomeCompleto = document.querySelector('#inputName');
    let email = document.querySelector('#inputEmail');

    let data = {};

    fnRemoveClass(nomeCompleto, 'is-invalid');
    if (nomeCompleto.value === "") {
        fnAddClass(nomeCompleto, 'is-invalid');
        nomeCompleto.focus();
        return false;
    }

    fnRemoveClass(email, 'is-invalid');
    if (email.value === "") {
        fnAddClass(email, 'is-invalid');
        email.focus();
        return false
    }

    data = JSON.stringify({
        name: nomeCompleto.value,
        email: email.value,
    });

    localStorage.setItem('solicitation', data);

    nomeCompleto.value = "";
    email.value = "";

    return true;
};

function fnAddClass(elem, className) {
    elem.classList.add(className);
}

function fnRemoveClass(elem, className) {
    elem.classList.remove(className);
}