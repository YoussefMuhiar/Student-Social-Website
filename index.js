var firebaseConfig = {
    apiKey: "AIzaSyATLzWPeylD3MJqrSU6Nghs8-VRRGfGc3E",
    authDomain: "login-and-registration-2a626.firebaseapp.com",
    projectId: "login-and-registration-2a626",
    storageBucket: "login-and-registration-2a626.appspot.com",
    messagingSenderId: "45143414291",
    appId: "1:45143414291:web:da270cb30ee056700f51e6"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()
  
  function register () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email/password is invalid')
      return
    }
   
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        email : email,
        full_name : full_name,
        password: password,
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).set(user_data)
      alert('Account registered')
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
  }
  
  function login () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email/password is invalid')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        last_login : Date.now()
      }
      database_ref.child('users/' + user.uid).update(user_data)
      window.location.href = "homepage.html";
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
  }

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      return true
    } else {
      return false
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }