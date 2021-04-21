// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDf5Tnkd5jtMVUUpzv_WikKzqVTlFBT8W8",
    authDomain: "birthday-form.firebaseapp.com",
    databaseURL: "https://birthday-form-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "birthday-form",
    storageBucket: "birthday-form.appspot.com",
    messagingSenderId: "889769990361",
    appId: "1:889769990361:web:0d9dbb5fe86601b8c906c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for submit
document.getElementById('decisionForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var ime = getInputVal('ime');
    var odluka = getInputVal('odluka');

    //Save message
    saveMessage(ime, odluka);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after few seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    }, 3000)

    //Clear form
    document.getElementById('decisionForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(ime, odluka){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        ime: ime,
        odluka: odluka
    });
}