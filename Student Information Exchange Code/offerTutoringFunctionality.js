var firebaseConfig = {
  apiKey: "AIzaSyCmCr9-Crp8VgQ6Tu-rsJkKBcm7f-jK4QM",
  authDomain: "tutor-65e34.firebaseapp.com",
  projectId: "tutor-65e34",
  storageBucket: "tutor-65e34.appspot.com",
  messagingSenderId: "160690615632",
  appId: "1:160690615632:web:3f00a8d54f886152282855"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const db = firestore.collection("offerTutoringOfficial");

let submitButton = document.getElementById("submit");
let backButton = document.getElementById("back");
let homeButton = document.getElementById("home");

homeButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = 'homepage.html';
});

backButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = 'tutoringNavigation.html';
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let subject = document.getElementById("subject").value;
  let timeTutoring = document.getElementById("time").value;
  let priceFees = document.getElementById("fees").value;

  firestore
    .collection("formTutoring")
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
      fname: firstName,
      lname: lastName,
      time: timeTutoring,
      subject: subject,
      fees: priceFees,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });
    
  alert("Tutoring offer has been regsitered");

  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
