
let courts = [{id: 0, name: "Marine Parade", place: "Napier", thumbs_up: 21, thumbs_down: 6, image_URL: "Images/marine parade.jpeg"},
              {id: 1, name: "Fitzgerald Place Reserve", place: "Napier", thumbs_up: 18, thumbs_down: 6, image_URL: "Images/fitzgerald_place_reserve.jpg"},
              {id: 2, name: "Flaxmere Park", place: "Hastings", thumbs_up: 16, thumbs_down: 3, image_URL: "Images/flaxmere_park.jpg"}]

let htmlContent = "";

for(let i = 0 ; i < courts.length ; i++) {
    let courtContent = `<div class="courtBox">
                            <img src=${courts[i].image_URL}>
                            <br>
                            <div class="courtBody">
                                <h3>${courts[i].name}</h3>
                                <br>
                                <p>${courts[i].place}</p>
                                <br>
                                <p>👍 ${courts[i].thumbs_up} 👎 ${courts[i].thumbs_down}</p>
                                <br>
                            </div>
                            <div class="button-wrapper"><a class="button-1" href="https://www.google.co.nz//">View Court</a>
                        </div>`;

                        htmlContent += courtContent;
}
display();
function display() {
    document.getElementsByClassName("courtsBox").InnerHTML = htmlContent;
}
    


function openMenu() {
  var x = document.getElementById("topNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
var searchFilter = () => {
    const input = document.querySelector(".form-control");
    const courts = document.getElementsByClassName("courtBox");
    let filter = input.value
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"
        
    } else {
        courts[i].style.display = "none"
    }
    }
}
