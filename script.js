var users = [["Brett", "Red"], ["Tricia", "Orange"], ["Derek", "Green"]];

console.log(users[0][1]);

function Submit(){
  var user = document.getElementById("userName").value;
  var pass = document.getElementById("password").value;

  for(i = 0; i < users.length; i++){
    if(user == users[i][0] && pass == users[i][1]){
      location.href="success.html";
    } 
    else{
      document.getElementById("correct").innerHTML = "WRONG!";
    }
  }

}

document.getElementById("submit").onclick = function() {Submit()};
