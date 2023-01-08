  var firebaseConfig = {
    apiKey: "AIzaSyAfvq8SIwArYawK9wIrBs8dTOLBB-3RQ-Y",
    authDomain: "cluborganization-be91e.firebaseapp.com",
    projectId: "cluborganization-be91e",
    storageBucket: "cluborganization-be91e.appspot.com",
    messagingSenderId: "687584847454",
    appId: "1:687584847454:web:3235d6c71a55a28436b6cf"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("formClub");
  
  let submitButton = document.getElementById("submit");
  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");

  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'homepage.html';
  });

  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    window.location.href = "clubNavigation.html";
  });
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    let category = document.getElementById("category").value;
    let title = document.getElementById("title").value;
    let details = document.getElementById("details").value;
  
    firestore
      .collection("formClub")
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
        category: category,
        title: title,
        details: details,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
    alert("Club is now registered");
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  