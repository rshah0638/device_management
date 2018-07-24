
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5u1d5fGKWI8nkkaZbB1fe9_5bre5HStA",
    authDomain: "discoveredevices.firebaseapp.com",
    databaseURL: "https://discoveredevices.firebaseio.com",
    projectId: "discoveredevices",
    storageBucket: "discoveredevices.appspot.com",
    messagingSenderId: "79302494261"
  };
  firebase.initializeApp(config);

const login_button = document.getElementById("login_button");

//const reset_button = document.getElementById();

  // add login event
login_button.addEventListener("click", function ()
{ // event listner//////////////////////////////////////////////////////////////////////////
// sign in setup................................................................
     if (firebase.auth().currentUser) {
       // [START signout]
       firebase.auth().signOut();
       // [END signout]
     } else {
       var email = document.getElementById("txt_email").value;
       var password = document.getElementById("txt_password").value;
       if (email.length < 4) {
         alert('Please enter an email address.');
         return;
       }
       if (password.length < 4) {
         alert('Please enter a password.');
         return;
       }
       // Sign in with email and pass.
       // [START authwithemail]
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);


       }); // firebase auth end

     } // else end
// sign in setup end...................................................................

// [START authstatelistener].....................................................................
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
        alert("login success");
         window.location.href = 'index.html';
       }
     });
     // [END authstatelistener]...........................................................................ss

}) // main event listner end///////////////////////////////////////////////////////////////////////////
