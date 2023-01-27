var user = document.getElementById('username');
var pw = document.getElementById('password');
var but = document.getElementById('submit');


function doCheck() {
    if (user.value != null && pw.value != null) {
        but.removeProperty('disabled');
        but.style.backgroundColor = '#BED8F2';
    }
}

function submit() {
    
}