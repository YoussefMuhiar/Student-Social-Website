var firebaseConfig = {
    apiKey: "AIzaSyBnc_ptNRDxtNti2JOaCedLZw2WHOHttz8",
    authDomain: "informationexchange-fa20f.firebaseapp.com",
    projectId: "informationexchange-fa20f",
    storageBucket: "informationexchange-fa20f.appspot.com",
    messagingSenderId: "699164036054",
    appId: "1:699164036054:web:3d4b063da09aab6536b277"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("exchange");
  
  let submitButton = document.getElementById("submit");
  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");
  
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'homepage.html';
  });
  
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'communityFeed.html';
  });
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let pname = document.getElementById("pname").value;
    let post = document.getElementById("post").value;
  
    firestore
      .collection("exchange")
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
        pname: pname,
        post: post,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });

    alert("Your post has been uploaded to the community feed");

    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  