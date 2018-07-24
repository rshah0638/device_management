
// firebase and jquery setup........................................................................
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

var searchonline = document.getElementById("search_button");


//........event listner.......................................................................................
   searchonline.addEventListener("click", function ()
  {

    // firebase reaading.........................................................
          firebase.database().ref("Devices").on('value',function(data) {

            var arr = Object.values(data.val());
            var devkey = Object.keys(data.val());
            var device = data.val();
            var search_item = document.getElementById("search_item").value;
            var searchby = document.getElementById("searchby").value;

            if(searchby == "Device_serial")
            {
              // serial number search being.............................................................
for(var i = 0; i<devkey.length; i++)
              {
                  var whether = "Item not found";
                  devkey[i]= devkey[i].substring(1, devkey[i].length - 1)
                  if(devkey[i]== search_item)
                    {
                    whether = "Item found";
                      break;
                    }
              }

    if(whether == "Item found")
      {
        var serial_user= Object.values(arr[i])
         for(var j=0; j<serial_user.length; j++)
        {

          var Device_serial_number = serial_user[j].Device_serial_number;
          var Student_Name = serial_user[j].Student_Name;
          var Student_id = serial_user[j].Student_id;
          var Student_Email_adress = serial_user[j].Student_Email_adress;
          var Check_out_Date= serial_user[j].Check_out_Date;
          var Check_in_Date = serial_user[j].Check_in_Date;
          var Check_out_key= serial_user[j].Check_out_key;
          var Status = serial_user[j].Status


          $('#Table_search').append("<tr><td>"+Device_serial_number+"</td><td>"+Student_Name+"</td><td>"+Student_id+"</td><td>"+
           Student_Email_adress+"</td><td>"+Check_out_Date+"</td><td>"+Check_in_Date+"</td><td>"+Check_out_key+"</td><td>"+Status+"</td></tr>")

        }
      }

      else   {$('#Table_search').append("<tr><td>"+whether+"</td><tr>")}

      // serial number search end ............................................................
            }
          else if(searchby == "Student_id")
          {
            // functions for studnt_id search..................................................
          var whether = "Item not found";
          var valx = [];
          var valy = [];


            for(var i = 0; i<arr.length; i++)
            {
              var dart= Object.values(arr[i])
              for(var j=0; j<dart.length; j++){
                 if(dart[j].Student_id == search_item){
                   valx.push(i);
                   valy.push(j);
                 }
              }
            }

  if(valx.length != 0)
  {

    for(var z = 0; z<valx.length; z++)
    {
      var dart= Object.values(arr[valx[z]]);
      var found = dart[valy[z]]
      console.log(found)

      var Device_serial_number = found.Device_serial_number;
      var Student_Name = found.Student_Name;
      var Student_id = found.Student_id;
      var Student_Email_adress = found.Student_Email_adress;
      var Check_out_Date= found.Check_out_Date;
      var Check_in_Date = found.Check_in_Date;
      var Check_out_key= found.Check_out_key;
      var Status = found.Status


      $('#Table_search').append("<tr><td>"+Device_serial_number+"</td><td>"+Student_Name+"</td><td>"+Student_id+"</td><td>"+
       Student_Email_adress+"</td><td>"+Check_out_Date+"</td><td>"+Check_in_Date+"</td><td>"+Check_out_key+"</td><td>"+Status+"</td></tr>")


    }
  }
  else  {
    $('#Table_search').append("<tr><td>"+whether+"</td><tr>")
        }
// student id search end ..................................

          }

  }// firebase function reading end
      )
}); // end event listner
