const firebaseConfig = {
  apiKey: "AIzaSyBIPthgIY3UyYpweJ1OGgphWnmche17CZk",
  authDomain: "blogpost-1af08.firebaseapp.com",
  databaseURL: "https://blogpost-1af08-default-rtdb.firebaseio.com",
  projectId: "blogpost-1af08",
  storageBucket: "blogpost-1af08.appspot.com",
  messagingSenderId: "370774283019",
  appId: "1:370774283019:web:fa81b2ffe7659a237d080e"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference
var contactForm = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('fname');
  var email = getElementVal('lname');
  var msg = getElementVal('subject');
  
  saveMessages(name,email,msg);

  // enable alert
  document.querySelector('.alert').style.display='block';

  //remove the alert
  setTimeout(() => {
    document.querySelector('.alert').style.display='none';
  },3000);

  //reset the form
  document.getElementById("contactForm").reset();
  
}

const saveMessages = (name,email,msg) => {
   var newContactForm = contactForm.push();

   newContactForm.set({
    name : name,
    email : email,
    msg : msg,
   })
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};