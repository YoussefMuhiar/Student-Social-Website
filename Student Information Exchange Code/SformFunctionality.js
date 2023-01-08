var firebaseConfig = {
    apiKey: "AIzaSyCVAJJ3bkMh8hC_1D3npILOuAPsrprBb20",
    authDomain: "marketselling-37796.firebaseapp.com",
    projectId: "marketselling-37796",
    storageBucket: "marketselling-37796.appspot.com",
    messagingSenderId: "832178448407",
    appId: "1:832178448407:web:9f825660dfc48c323a5452"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("Sform");
  
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
      .collection("Sform")
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

    alert("Selling form has been uploaded");

    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  