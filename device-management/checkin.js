
// firebase and jquery setup........................................................................
var $ = require("jquery");
var nodemailer = require('nodemailer');
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

var searchonline = document.getElementById("checking");


   searchonline.addEventListener("click", function ()
  {//........event listner.......................................................................................

      var Status = "None";
      var ssid = "None";
      var key = "None";

        // firebase reaading..on function .......................................................
      firebase.database().ref("Devices").on('value',function(data) {

                var arr = Object.values(data.val());
                var devkey = Object.keys(data.val());

                var serialin = document.getElementById("serialin").value;
                var idnumberin= document.getElementById("idnumberin").value;
                var emailin = document.getElementById("emailin").value;
                var chargerin = document.getElementById("chargerin").value;
                var cablein = document.getElementById("chargerin").value;
                var lost = document.getElementById("lost").value;

                for(var i = 0; i<devkey.length; i++) // searches where the device is
                  {
                      var whether = "Item not found";
                      devkey[i]= devkey[i].substring(1, devkey[i].length - 1)
                      if(devkey[i]== serialin)
                        {
                        whether = "Item found";
                          break;
                        }
                  }




                if(whether == "Item found")
                  {
                    var serial_user= Object.values(arr[i]);
                     Status = serial_user[serial_user.length - 1].Status;
                     ssid = serial_user[serial_user.length - 1].Student_id;
                     key = Object.keys(arr[i])[serial_user.length - 1];


                  }
                  else if(whether == "Item not found")
                  {
                    window.alert("Device not found!")
                  }


                  // if the device is not checked in and the student id of last element is same as ssid enetered. then update.
                  if(Status != "Checked in" && ssid == idnumberin )
                  {
                    //.......update code ..............................................................
                    var datapost = {

                      Check_out_Date:serial_user[serial_user.length - 1].Check_out_Date,
                      Device_serial_number: serial_user[serial_user.length - 1].Device_serial_number,
                      Student_Name:serial_user[serial_user.length - 1].Student_Name,
                        Student_id: serial_user[serial_user.length - 1].Student_id,
                        Student_Email_adress:serial_user[serial_user.length - 1].Student_Email_adress,
                        Student_Phone_number:serial_user[serial_user.length - 1].Student_Phone_number,
                          Check_in_Date:serial_user[serial_user.length - 1].Check_in_Date,
                          User_agreement:serial_user[serial_user.length - 1].User_agreement,
                          Charger_issued:serial_user[serial_user.length - 1].Charger_issued,
                          Cable_issued:serial_user[serial_user.length - 1].Cable_issued,

                          Charger_returned:document.getElementById("chargerin").value,
                          Cable_returned: document.getElementById("chargerin").value,
                          Check_out_key:key,
                          Status: "Checked in"
                      }


                    var updates = {};
                    updates['/"'+serialin+'"/'+key]= datapost;

                firebase.database().ref("Devices").update(updates).then(()=>{
                console.log("sucess");
                }).catch((error)=>{
                console.log("error")
                })

                // update code end............................................................................

                // email setup.............................................................................
                  var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'fresnodiscovere@gmail.com',
                      pass: 'Tablet1911'
                    }
                  });

                  var mailOptions = {
                    from: 'fresnodiscovere@gmail.com',
                    to: serial_user[serial_user.length - 1].Student_Email_adress,
                    subject: 'Discovere tablet check out receipt',
                    text: '[Do not reply] thank you for using Discovere program. Your receipt code is:'+key
                  };

                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      window.alert('Email sent with id: ' +key );
                    }
                  });

                // email setup ends..............................................................................

                  }

                  else if(ssid != idnumberin )
                      {// else begins.
                        window.alert("Device either checked in or student id is invalid");

                      } // else ends...

          })// firebase function on end...........................

}); // end event listner
