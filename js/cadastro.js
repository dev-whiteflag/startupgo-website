

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


var email = "";
var senha = "";
//Função para enviar ao banco
function setPessoa() {

    var db = firebase.firestore();
    //Pegando os valores do relatório 
    var Nome = document.getElementById("Nome").value;
    var Sobrenome = document.getElementById("Sobrenome").value;
    var Endereco = document.getElementById("Endereco").value;
    var Numero = document.getElementById("Numero").value;
    var Bairro = document.getElementById("Bairro").value;
    var Estado = document.getElementById("Estado").value;
    var Genero = document.getElementById("Genero").value;
    var CEP = document.getElementById("CEP").value;
    var Telefone1 = document.getElementById("Telefone1").value;
    var Telefone2 = document.getElementById("Telefone2").value;
    var Facebook = document.getElementById("Facebook").value;
    var GitHub = document.getElementById("GitHub").value;
    var Instragram = document.getElementById("Instragram").value;
    var Twitter = document.getElementById("Twitter").value;




    //inserindo os valores no banco, onde o valor antes dos ":" é o indice do banco e o nome depois do ":" são as variaveis locais
    db.collection("Pessoas").add({
        Nome: Nome,
        Sobrenome: Sobrenome,
        Endereco: Endereco,
        Numero: Numero,
        Bairro: Bairro,
        Estado: Estado,
        Genero: Genero,
        CEP: CEP,
        Twitter: Twitter,
        Instragram: Instragram,
        GitHub: GitHub,
        Facebook: Facebook,
        Email: "",
        Telefone1: Telefone1,
        Telefone2: Telefone2,



    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            window.alert("Perfil criado com sucesso")
            window.localStorage.setItem("docRef", docRef.id);
            location.href = "../index.html";

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            window.alert("Erro ao cadastrar! " + error)
        });

}


function set2() {

    var Email = document.getElementById("Email").value;
    var Senha = document.getElementById("Senha").value;
    var Senha2 = document.getElementById("Senha2").value;


    if (Senha == Senha2) {

        email2 = Email;
        senha2 = Senha;
        firebase.auth().createUserWithEmailAndPassword(email2, senha2).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            // ...
            console.log(errorCode + "" + errorMessage);
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var email = user.email;
                var uid = user.uid;
                //  set3(uid, email2);
                window.alert('Cadastro Criado com sucesso')
                location.href = "../index.html";

            } else {

            }
        });
    } else {
        window.alert('Verifique os campos e tente novamente')
    }



}



function set3(uid, email) {
    var db = firebase.firestore();
    var docRef = window.localStorage.getItem("docRef");
    var washingtonRef = db.collection("Alunos").doc(docRef);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        uid: uid,
        uidDoc: docRef,//aqui esta invertido em relação a empresa, para encontrar esse arquivo, o uid do documento é este
        Email: email
    })
        .then(function () {
            console.log("Document successfully updated!");
            window.alert("Solicitação de cadastro realizada com sucesso, aguarde a aprovação")
            db.collection("Alunos").doc(docRef).collection("ContatoEmpresa").add({

            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);

                    window.localStorage.setItem("docRef", docRef.id);
                    location.href = "./Login.html.html";

                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                    window.alert("Erro ao cadastrar! " + error)
                });


            location.href = "./Login.html";
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            window.alert("Erro, tente novamente mais tarde", error)
        });





}