let email = document.getElementById("email")
let nama = document.getElementById("nama")
let notelp = document.getElementsByName("notelp")
let event = document.getElementById("event")
let submit = document.getElementById("submit")

let errorremail = document.getElementById("erroremail")
let errornama = document.getElementById("errornama")
let errornotelp = document.getElementById("errornotelp")

function validate(){
    let count = 0;
    for(let i=0; i<email.value.length; i++){
        if(email.value[i] == '@'){
            count++;
        }
    }
    if(email.value == ""){
        errorremail.innerHTML = "Email harus diisi"
        return false;
    }
    else if(count != 1){
        errorremail.innerHTML = "Harus ada karakter '@'"
        return false;
    }
    else{
        errornama.innerHTML = ""
    }

    if(nama.value == ""){
        errornama.innerHTML = "Nama harus diisi"
        return false;
    }
    else if(nama.value.length < 3){
        errornama.innerHTML = "Nama minimal 3 karakter"
        return false;
    }
    else{
        errornama.innerHTML = ""
    }
    
    let cek = 0;
    if(notelp.value[0] == 0){
        cek++;
    }
    if(nnotelp.value[1] == 8){
        cek++;
    }
    if(notelp.value == ""){
        errornotelp.innerHTML = "Nomor telepon harus diisi"
        return false;
    }
    else if(cek != 2){
        errornotelp.innerHTML = "2 digit pertama harus '08'"
        return false;
    }
    else if(notelp.value.length > 14){
        errornotelp.innerHTML = "Nomor telepon tidak boleh lebih dari 14 digit"
        return false;
    }
    else{
        errornotelp.innerHTML = ""
    }
    return true;
}

const firebaseConfig = {
    apiKey: "AIzaSyA_zioHC1iKaCi3bXtv91FoS9hyLMPhLy8",
    authDomain: "lnt-final-project-a1c4c.firebaseapp.com",
    databaseURL: "https://lnt-final-project-a1c4c-default-rtdb.firebaseio.com",
    projectId: "lnt-final-project-a1c4c",
    storageBucket: "lnt-final-project-a1c4c.appspot.com",
    messagingSenderId: "963129183507",
    appId: "1:963129183507:web:ad11b21ac822c752c31ee6"
  };

  firebase.initializeApp(firebaseConfig);
  let database = firebase.database().ref("form");

$("#submit").click(function(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let nama = document.getElementById("nama").value;
    let notelp = document.getElementById("notelp").value;
    let event = document.getElementById("event").value;
    let newUser = database.push();
    newUser.set({
        email: email,
        nama: nama,
        notelp: notelp,
        event: event,
    });
});