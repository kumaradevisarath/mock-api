var search = document.querySelector("#search");
var container = document.querySelector(".container");
var listitem = container.querySelectorAll("li");

/*search.addEventListener("keyup", (e) => {
     var enteredvalue = e.target.value.toLowerCase().trim();
     for (var count = 0; count < listitem.lenght; count++) {
          if (listitem[count].textcontent.toUpperCase().indexOf(enteredvalue) < 0) {
               listitem[count].style.display = "none";
          }
          else {
               listitem[count].style.display = "block";
          }
     }
});*/

fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res) => res.json())
     .then(data => data.forEach(user => {
          let titledata = `<li>${user.title}</li>`
          document.querySelector("ul").insertAdjacentHTML("beforeend", titledata)
     }))
     .catch(err => console.log("error"));






  