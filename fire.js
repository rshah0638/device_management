
var $ = require("jquery");

var firebase = require("firebase/app");
require("firebase/database");

var config = {
  apiKey: "AIzaSyA5u1d5fGKWI8nkkaZbB1fe9_5bre5HStA",
  authDomain: "discoveredevices.firebaseapp.com",
  databaseURL: "https://discoveredevices.firebaseio.com",
  projectId: "discoveredevices",
  storageBucket: "discoveredevices.appspot.com",
  messagingSenderId: "79302494261"
};
firebase.initializeApp(config);

// check out process begin................................
var postonline = document.getElementById("sub");

let today = new Date();
var month = today.getUTCMonth() + 1; //months from 1-12
var day = today.getUTCDate();
var year = today.getUTCFullYear();
newdate = year + "-" + month + "-" + day;
var agree =document.getElementById("agreement").value;

   postonline.addEventListener("click", function ()
  { // event listner begin

    // device check out process begins........................................................................
    firebase.database().ref("Devices/"+JSON.stringify(document.getElementById("serial").value)).push(
        {
            Check_out_Date: newdate,
            Device_serial_number: document.getElementById("serial").value,
            Student_Name:document.getElementById("name").value,
            Student_id: document.getElementById("idnumber").value,
            Student_Email_adress:document.getElementById("email").value,
            Student_Phone_number:document.getElementById("phone").value,
            Check_in_Date:document.getElementById("checkindate").value,
            User_agreement:document.getElementById("agreement").checked,
            Charger_issued:document.getElementById("charger").checked,
            Cable_issued: document.getElementById("cable").checked,
            Charger_returned:false,
            Cable_returned: false,
            Check_out_key:"None",
            Status: "Checked out"
                }
                ).then(()=>{
                window.alert("Request Submitted");
                }).catch((error)=>{
                console.log("error")
                })


          // check out process ends..................................................................................

  }); // evnt listner ends........
