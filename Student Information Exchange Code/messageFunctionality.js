var firebaseConfig = {
    apiKey: "AIzaSyDX5W3LsAFj1MRyyawTQ0SpUTHD5xdXWrY",
    authDomain: "inbox-9cfa9.firebaseapp.com",
    projectId: "inbox-9cfa9",
    storageBucket: "inbox-9cfa9.appspot.com",
    messagingSenderId: "976603450430",
    appId: "1:976603450430:web:a6969689c0b273ada7156f"
  };
  
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  const db = firestore.collection("Inbox");
  
  let submitButton = document.getElementById("submit");
  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");
  
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'homepage.html';
  });
  
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'messageNavigation.html';
  });
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    let receiver = document.getElementById("receiver").value;
    let message = document.getElementById("message").value;
  
    firestore
      .collection("Inbox")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().fname;
          if (firstName === fn) {
            console.log("Already Exists");
          }
  
        });
      });

    db.doc()
      .set({
        receiver: receiver,
        message: message,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });

    alert("Message has been sent");
  
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  