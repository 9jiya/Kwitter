var firebaseConfig = {
  apiKey: "AIzaSyAYDDuee9PP_0fOSNxJAzzB4hlIjPpXGa8",
  authDomain: "chat-project-e35c8.firebaseapp.com",
  databaseURL: "https://chat-project-e35c8-default-rtdb.firebaseio.com",
  projectId: "chat-project-e35c8",
  storageBucket: "chat-project-e35c8.appspot.com",
  messagingSenderId: "424847949366",
  appId: "1:424847949366:web:31ec0d19951480ddba2297",
  measurementId: "G-STBM6NDPJY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("name");
  room_name = localStorage.getItem("room");
  console.log("Hi");
  function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("message").value = "";
  }
  function getData() 
{
      firebase.database().ref("/"+room_name).on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
       childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose"){
           firebase_message_id = childKey;
           message_data = childData;
           console.log("This is Firebase id",firebase_message_id);
           console.log("This is Firebase Data",message_data);
           name = message_data["name"];
           message = message_data["message"];
           like = message_data["like"];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<h4>"+message+"</h4>";
           like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
           row = name_with_tag + message_with_tag +like_button + span_with_tag;
           document.getElementById("output").innerHTML += row;

       }
    });
});
}
getData();
function updateLike(e){
  console.log("The button is clicked ",e);
  button1 = e;
  likebutton = document.getElementById(button1).value;
  console.log("Likes - ",likebutton);
  like1 = Number(likebutton) + 1;
  console.log("Like Pressed",like1);
  firebase.database().ref(room_name).child(e).update({
    like : like1 
  });
}
function logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("room");
  window.location="index.html";
}