var firebaseConfig = {
    apiKey: "AIzaSyB3RIhDkYxSU5AhEhR5jyfE5iQBsOYxXJo",
    authDomain: "marketlending-c582b.firebaseapp.com",
    projectId: "marketlending-c582b",
    storageBucket: "marketlending-c582b.appspot.com",
    messagingSenderId: "741675002075",
    appId: "1:741675002075:web:10e5079e00a243f12b44fe"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("Lform");
  
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
      .collection("Lform")
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

    alert("Lending form has been uploaded");

    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  