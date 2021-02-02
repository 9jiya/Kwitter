function addUser(){
    x = document.getElementById("user_name").value;
    localStorage.setItem("name",x);
    window.location="index1.html";
}