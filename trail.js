
// check where the device is checkout or not..................................begin...
  firebase.database().ref("Devices").on('value',function(data) {
            var arr = Object.values(data.val());
            var devkey = Object.keys(data.val());
            var serialin = document.getElementById("serial").value;

            for(var i = 0; i<devkey.length; i++) // searches where the device is
              {   var whether = "Item not found";
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
              }
// check where the device is checkout or not..................................end .....

              if(Status == "Checked out"){window.alert("Device already checked out!");}

              else
                  {// else begins.

                    // device check out process begins........................................................................

                          // check out process ends..................................................................................
                  } // else ends...
