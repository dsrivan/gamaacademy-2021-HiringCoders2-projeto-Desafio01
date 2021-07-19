const button = document.querySelector('.button button');
button.addEventListener('click', fnPreSubmit);

const divSuccess = document.querySelector('.success');

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
    if (email.value === "" || !(fnTestEmailFormat(email.value))) {
        fnAddClass(email, 'is-invalid');
        email.focus();
        return false
    }

    fnRemoveClass(divSuccess, 'd-none');
    setTimeout(() => {
        fnAddClass(divSuccess, 'd-none');
    }, 2500);

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

function fnTestEmailFormat(email) {
    // poderia utilizar regex, mas vai apenas essa validação simples
    return email.indexOf("@") != -1;
}