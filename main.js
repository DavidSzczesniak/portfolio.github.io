// Initialize Firebase
var config = {
    apiKey: "AIzaSyCj7kADUpf3TdQoKITh7UwZm5QGjsLF-gU",
    authDomain: "contactform-49194.firebaseapp.com",
    databaseURL: "https://contactform-49194.firebaseio.com",
    projectId: "contactform-49194",
    storageBucket: "contactform-49194.appspot.com",
    messagingSenderId: "68100694849"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form sumbit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert 
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });

}