var firebaseConfig = {
    apiKey: "AIzaSyAyChoONXC-eWk92CZVDupbTvQSjDK2uEQ",
    authDomain: "marketexchange-e5dc7.firebaseapp.com",
    projectId: "marketexchange-e5dc7",
    storageBucket: "marketexchange-e5dc7.appspot.com",
    messagingSenderId: "262549766486",
    appId: "1:262549766486:web:b03cd674bf9f4354ed16f7"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("Eform");
  
  let submitButton = document.getElementById("submit");
  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");
  
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'homepage.html';
  });
  
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'Market.html';
  });
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let details = document.getElementById("details").value;
  
    firestore
      .collection("Eform")
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
        title: title,
        details: details,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });

    alert("Exchange form has been uploaded");

    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  