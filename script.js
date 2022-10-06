function checkPassword(form){
  password1 = form.pwd.value;
  password2 = form.confirm.value;
  // var toconfirm=document.getElementsByName("pwd");
  // var confirm=document.getElementsByName("confirm");
  var confirm=document.getElementById("confirm-pwd")
  // console.log(toconfirm);
  console.log(confirm);
  if(password1==="")
    alert("Please enter a password.");
  else if(password2===""){
    alert("Please confirm your password");
  }
  else if(password1!=password2){
    // alert("Passwords do not match.");
    // toconfirm.classList.add("pass-nomatch");
    confirm.classList.add("pass-nomatch");
    return false;
  }
  else if(password1 === password2){
    // toconfirm.classList.add("pass-nomatch")
    confirm.classList.remove("pass-nomatch");
    return true;
  }
  else{
    alert("Some other password error.")
    return false;
  }
}

// const helloWorld = function() {
//   return 'Hello, World!'
// };

// const pass = document.querySelector("pwd");
// const confirmPass = document.querySelector("confirm-pwd")
// const body = document.querySelector("body");

// body.addEventListener('click', (e) => {
//   // console.log(e.target.classList[0])
//   if (pass==confirmPass){
//       confirmPass.classList.add("valid");
//   }
//   else{
//     confirmPass.classList.add("invalid");
//   };
// })

// function checkPassword(inputText){

// }