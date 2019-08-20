auth.onAuthStateChanged(user => {
  if (user) {
    let currentUser = firebase.auth().currentUser.email;
    sessionStorage.setItem("user", currentUser);
    let currentUserSession = sessionStorage.getItem("user");

    console.log(currentUserSession);

    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  // const username = signupForm["signup-name"].value;

  //signup user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          // console.log(idToken);
          // Send token to your backend via HTTPS
          // setupUI(cred);

          return db
            .collection("users")
            .doc(cred.user.email)
            .set({
              username: Username.value
            });
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(cred.user);
      const Username = document.querySelector("#signup-username");

      let username = Username.value;
      console.log(username);
      const mail = document.querySelector("#signup-email");
      let emailID = mail.value;
      let emailSession = sessionStorage.setItem("email", emailID);
      let usernameSession = sessionStorage.setItem("username", username);
      location.href = "./admin/src/admin/index.html";
    })
    .catch(err => {
      console.log(err);
      alert(err);
    });
});

function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("user");
    let usernameSession = sessionStorage.removeItem("username");
    // location.href = "index.html";
  });
  console.log("am logging out");
}