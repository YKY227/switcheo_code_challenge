// var element = document.getElementById("input-address");
// element.addEventListener("focus", handler);
// element.addEventListener("blur", handler);

// function handler(evt) {
//     if (evt.type == "focus")
//         evt.target.style.backgroundColor = "#ffd43b"; 
//     else if (evt.type == "blur") {
//         evt.target.style.backgroundColor = "white";
//     }
// }
window.onload = function() {
  var div = document.getElementsByClassName('label_container')[0];
  var input = document.getElementsByClassName("input_color")[0];
  
  input.addEventListener('focus', function() {
    div.style.background = "#ffd43b"; /*'#cd1e41'*/ 
    div.style.color = '#183152';
  });
  
  input.addEventListener('blur', function() {
    div.style.background = '#cccbc9'; /*'#cccbc9', '#ffd53d'*/
    div.style.color = '#000';
  });
}

function validateAddress() {
    const address = document.getElementById("input-address").value
    const error = document.getElementById("address_error")
    
    if (address.length == 0) {
        error.innerHTML = 'Your address is empty!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }
    else if (address != '0x71C7656EC7ab88b098defB751B7401B5f6d8976F') {
        error.innerHTML = 'Incorrect address, please try again!'
        error.previousElementSibling.style.border = "2px solid red";
        return false
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}

function validateAmount() {

    const amount = document.getElementById("input-amount").value
    const error = document.getElementById("amount-error")
    
    if (amount.length == 0) {
        error.innerHTML = 'Your amount is empty!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}


function validateOTP() {

    const otp = document.getElementById("input-otp").value
    const error = document.getElementById("otp_error")

    if (otp == ""){
        error.innerHTML = 'Your OTP is empty!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else if (otp != 123456) {
        error.innerHTML = 'Incorrect OTP! Please try again.'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}

function nextSlide(currentPage, nextPage) {
    currentPage.classList.add('inactive');
    currentPage.classList.add('shift');
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
}

function clipboard(choice){

    if (choice == 1){
        var copyText = '123456'
    }
    else {
        var copyText = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
    }
    
    navigator.clipboard.writeText(copyText);
}



function animatedForm() {

    const allPages = document.querySelectorAll(".token")

    allPages.forEach(page=>{

        page.addEventListener("click", () => {

            const currentPage = page.parentElement;

            const nextPage = currentPage.nextElementSibling;

            const result1 = validateAddress()

            const result2 = validateAmount()

            const result3= validateOTP()

            // if (sendBox == 'send-box') {

            //     const result3 = validateOTP()

            //     if (result3) {
            //         nextSlide(currentPage, nextPage)
            //         document.body.style.background = ''
            //     }
            //     else {
            //         document.body.style.background = 'linear-gradient(0deg, var(--error), white, white, white)'
            //     }
            
            // }



            if (result1 && result2 && result3) {
                nextSlide(currentPage, nextPage)
                document.body.style.background = 'linear-gradient(0deg, var(--success), white, white, white)'
            }
            else {
                document.body.style.background = 'linear-gradient(0deg, var(--error), white, white, white)'
            }




        })
 
    })
}

animatedForm();