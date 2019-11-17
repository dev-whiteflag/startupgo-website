
// Your web app's Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var tabela = document.getElementById('tabela');

tabela.innerHTML = '';

db.collection("Pessoas")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            tabela.innerHTML = `
            
            
            <div class="card text-center">
            <div class="card-header">
    
                <ul class="nav nav-pills card-header-pills">
                    <h5>Nome: ${doc.data().Nome}</h5>
    
                </ul>
    
            </div>
            
            
            <div class="card-body">
            <div class="text-left">
               
                <p class="card-text text-left">Sobrenome: ${doc.data().Sobrenome}</p>
                <p class="card-text text-left">Email: ${doc.data().Email}</p>
                <p class="card-text text-left">Endereço: ${doc.data().Endereco}, Nº: ${doc.data().Numero}, Bairro: ${doc.data().Bairro} </p>
                <p class="card-text text-left"> Cep: ${doc.data().CEP}</p>
                <p class="card-text text-left">Celular: ${doc.data().Telefone1} </p>
       
            </div>
            </div >
            </br></br> `

        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });