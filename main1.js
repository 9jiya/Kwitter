var firebaseConfig = {
      apiKey: "AIzaSyBhtmWiBAoub7R4S3tkTTGgX7JQ0sYGQTg",
      authDomain: "qwitter-c8167.firebaseapp.com",
      databaseURL: "https://qwitter-c8167-default-rtdb.firebaseio.com",
      projectId: "qwitter-c8167",
      storageBucket: "qwitter-c8167.appspot.com",
      messagingSenderId: "775260351915",
      appId: "1:775260351915:web:012367d26dcc97ba10b6ee",
      measurementId: "G-ZBM5TNZYZ1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    x1 = localStorage.getItem("name");
    console.log(x1);
    document.getElementById("user_name").innerHTML = "Welcome  "+x1+"!";
    function addRoom(){
          a = document.getElementById("room_name").value;
          console.log(a);
          firebase.database().ref("/").child(a).set({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room",a);
          window.location="index2.html";
    }
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("RoomName-",Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room name is - "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();
function redirectToRoomName(y){
      console.log(y);
      localStorage.setItem("room",y);
      window.location="index2.html";
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
}