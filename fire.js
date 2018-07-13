
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
                                      User_agreement:document.getElementById("agreement").value,
                                      Charger_issued:document.getElementById("charger").value,
                                      Cable_issued: document.getElementById("cable").value,
                                      Charger_returned:"off",
                                      Cable_returned: "off",
                                      Check_out_key:"None",
                                      Status: "Checked out"
                }
                ).then(()=>{
                console.log("sucess");
                }).catch((error)=>{
                console.log("error")
                })

                window.alert("Request Submitted");
          // check out process ends..................................................................................

  }); // evnt listner ends........
