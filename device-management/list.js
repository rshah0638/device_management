

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

let today = new Date();
var month = today.getUTCMonth() + 1; //months from 1-12
var day = today.getUTCDate();
var year = today.getUTCFullYear();
newdate = year + "-" + month + "-" + day;
var date1 = new Date(newdate);


//list view code
  firebase.database().ref("Devices").on('value',function(data) {
    var serial = Object.keys(data.val());
    var arr = Object.values(data.val())

    for(var i=0; i<arr.length; i++)
    {
      var arp = Object.values(arr[i]);
      var rowdata = arp.slice(-1)[0];

      var Device_serial_number = rowdata.Device_serial_number;
      var Student_Name = rowdata.Student_Name;
      var Student_id = rowdata.Student_id;
      var Student_Email_adress = rowdata.Student_Email_adress;
      var Check_out_Date= rowdata.Check_out_Date;
      var Check_in_Date = rowdata.Check_in_Date;
      var Status_in = rowdata.Status;
      var date2 = new Date(Check_in_Date);
      if((date2 < date1) && (Status_in != "Checked in")){
        var Status = "Due";
      }
      else{
        var Status = rowdata.Status;

      }


console.log(date2, date1,(date2 < date1));
//console.log(arp)
    //  console.log(Device_serial_number,Student_Name,Student_id, Student_Email_adress,Check_out_Date,Check_in_Date)


      $('#Table_body').append("<tr><td>"+Device_serial_number+"</td><td>"+Student_Name+"</td><td>"+Student_id+"</td><td>"+
      Student_Email_adress+"</td><td>"+Check_out_Date+"</td><td>"+Check_in_Date+"</td><td>"+Status+"</td></tr>")

    }

}) /// firebase read end
