
var firebaseConfig = {
    apiKey: "AIzaSyAnJoRvIC0rn7dkxlmSOLx267JFzCyxaPE",
    authDomain: "startupgo-725d9.firebaseapp.com",
    databaseURL: "https://startupgo-725d9.firebaseio.com",
    projectId: "startupgo-725d9",
    storageBucket: "startupgo-725d9.appspot.com",
    messagingSenderId: "853060611646",
    appId: "1:853060611646:web:9cffc9574b616ff873eb6f",
    measurementId: "G-P4EJ3G4Q17"
};


firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
window.onload = logout()

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var user = user.uid;
        var user2 = user.uid;
        console.log(user)

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function () {
                var user = firebase.auth().currentUser;
                var user2 = user.uid;
                window.alert(user.Nome)
                window.self.location.href = "../index.html";
                return firebase.auth().signInWithEmailAndPassword(email, password);
                
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    } else {
        //window.self.location.href = "./404.html";
    }


});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Erro" + errorMessage);
        // ...
    });


}

function logout() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogado")
        window.localStorage.clear();
    }).catch(function (error) {
        // An error happened.
    });
}