var login = document.getElementById('login');
var sign = document.getElementById('sign');

var loginLink = document.getElementById('loginLink');
var signLink = document.getElementById('signLink');

var nameInputSign = document.getElementById('nameInputSign');
var mailInputSign = document.getElementById('mailInputSign');
var passInputSign = document.getElementById('passInputSign');


var mailInputLogin = document.getElementById('mailInputLogin');
var passInputLogin = document.getElementById('passInputLogin');

var signBtn = document.getElementById('signBtn');
var loginBtn = document.getElementById('loginBtn');


var welcome = document.getElementById('welcome');

var message = document.getElementById('message');
var messageL = document.getElementById('messageL');



var dataInputsSign = [nameInputSign, mailInputSign, passInputSign];
var dataInputslogin = [mailInputLogin, passInputLogin];

var nameGlobal;

signLink.addEventListener('click', function () {
    login.classList.replace('d-center', 'd-none');

    sign.classList.replace('d-none', 'd-center')
})

loginLink.addEventListener('click', function () {
    sign.classList.replace('d-center', 'd-none')

    login.classList.replace('d-none', 'd-center');

})


var dataContainer = [];

// var dataCheack = [];

if (JSON.parse(localStorage.getItem('user')) == null) {
    dataContainer = []
}

else {
    dataContainer = JSON.parse(localStorage.getItem('user'))
}

// if(! localStorage.getItem('user') == null){
// dataContainer = JSON.parse(localStorage.getItem('user'))
// }

// else {
//     dataContainer = [];
// }





function signUp() {
    if (nameValid() && mailValid() && passValid()) {
        var dataInputs = {
            name: nameInputSign.value,
            email: mailInputSign.value,
            password: passInputSign.value
        }

        nameGlobal = dataInputs.name;

        var exists = false;

        for (var j = 0; j < dataContainer.length; j++) {
            if (dataContainer[j].email == dataInputs.email) {
                exists = true;
                var faild = `
                <p class="alert alert-danger text-center"><i
                class="fa-solid fa-triangle-exclamation"></i>
            This Email Is Already Exist ,
            Please Login </p>`;

                message.innerHTML = faild;
                return;
            }

        }
        if (!exists) {
            dataContainer.push(dataInputs);
            localStorage.setItem('user', JSON.stringify(dataContainer))
            success = `
            <p class="alert alert-success text-center"><i
            class="fa-solid fa-triangle-exclamation"></i>
            Account successfully created </p>`;
            message.innerHTML = success;
            resetForm(dataInputsSign)

        }
    }

}


function cheack() {
    var dataInputs = {
        email: mailInputLogin.value,
        password: passInputLogin.value
    }

    var found = false;


    for (var i = 0; i < dataContainer.length; i++) {
        if ((dataInputs.email.toLowerCase() == dataContainer[i].email.toLowerCase()) && (dataInputs.password.toLowerCase() == dataContainer[i].password.toLowerCase())) {
            found = true;
            login.classList.replace('d-center', 'd-none');
            welcome.classList.replace('d-none', 'd-center')

            // To Display Welcome Page For Particular Person
            nameGlobal = dataContainer[i].name;

            var welcomePage = `
            <div id='welcome-content' class="d-flex justify-content-center">
            <div class="container rounded-2">
            <div class="welcome-title p-3 mt-5 rounded-2">
                <div class="top-side d-flex gap-2 justify-content-between align-items-center p-3">
                    <h2 class="text-capitalize bg-black text-white text-center rounded-2 px-2 py-1">welcome to home page <span
                            class=" name-global text-primary">${nameGlobal}</span></h2>
                    <div>
                    <button id="logoutBtn" class="btn btn-outline-danger btn-lg">Logout</button>
                    </div>
                </div>
                <div class="notes my-5">
                    <div class="text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>`;



            welcome.innerHTML = welcomePage;


            document.getElementById('logoutBtn').addEventListener('click', function () {
                // welcome.innerHTML = ' ';
                document.getElementById('welcome-content').remove()
                login.classList.replace('d-none', 'd-center');

            })

            resetForm(dataInputslogin);
            messageL.innerHTML = ' ';
            return;
        }
    }

    if (found == false) {
        var faild = `
                <p class="alert alert-danger text-center"><i
                class="fa-solid fa-triangle-exclamation"></i>
            The Email Or Password Incorrect </p>`;

        messageL.innerHTML = faild;
    }

}


signBtn.addEventListener('click', function () {
    signUp()
})

loginBtn.addEventListener('click', function () {
    cheack()
})




nameInputSign.addEventListener('input', function () {
    nameValid()
})
mailInputSign.addEventListener('input', function () {
    mailValid()
})
passInputSign.addEventListener('input', function () {
    passValid()
})



function nameValid() {
    var regex = /^\w+$/;
    var text = nameInputSign.value;

    if (regex.test(text)) {
        nameInputSign.classList.add('is-valid')
        nameInputSign.classList.replace('is-invalid', 'is-valid')
        return true;

    }
    else {
        nameInputSign.classList.add('is-invalid')
        nameInputSign.classList.replace('is-valid', 'is-invalid')
        return false;


    }

}
function mailValid() {
    var regex = /^(\w+)@{1}(\w+)\.(\w+){2,}$/;
    var text = mailInputSign.value;

    if (regex.test(text)) {
        mailInputSign.classList.add('is-valid')
        mailInputSign.classList.replace('is-invalid', 'is-valid')
        return true;

    }
    else {
        mailInputSign.classList.add('is-invalid')
        mailInputSign.classList.replace('is-valid', 'is-invalid')
        return false;


    }

}

function passValid() {
    var regex = /\w/;
    var text = passInputSign.value;

    if (regex.test(text)) {
        passInputSign.classList.add('is-valid')
        passInputSign.classList.replace('is-invalid', 'is-valid')
        return true;

    }
    else {
        passInputSign.classList.add('is-invalid')
        passInputSign.classList.replace('is-valid', 'is-invalid')
        return false;
    }

}




function resetForm(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].value = null;
        arr[i].classList.remove('is-valid');
    }
}



























// array = [{ name: 'mo', pass: 1234 }, { name: 'zon', pass: 5678 }];

// function valid() {
//     var found = false;

//     for (var i = 0; i < array.length; i++) {

//         if (array[i].name == 'mo') {

//             console.log('good');
//             found = true;
//             return;

//         }
//     }

//     if (!found) {
//         return console.log('not found');
//     }
// }

// valid()
