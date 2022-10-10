let courts = [{name: "Marine Parade", place: "Napier", thumbs_up: 21, thumbs_down: 6, image_URL: "Images/marine_parade.jpeg", link_URL: "Courts/marine_parade.html"},
              {name: "Fitzgerald Place Reserve", place: "Napier", thumbs_up: 18, thumbs_down: 6, image_URL: "Images/fitzgerald_place_reserve.jpg", link_URL: "Courts/fitzgerald_place_reserve.html"},
              {name: "Flaxmere Park", place: "Hastings", thumbs_up: 16, thumbs_down: 3, image_URL: "Images/flaxmere_park.jpg", link_URL: "Courts/flaxmere_park.html"}, 
              {name: "St Joseph's School", place: "Central Hawkes Bay", thumbs_up: 22, thumbs_down: 5, image_URL: "Images/st_joseph's_school.png", link_URL: "Courts/st_joseph's_school.html"},
              {name: "Wairoa Community Centre", place: "Wairoa", thumbs_up: 9, thumbs_down: 1, image_URL: "Images/wairoa_community_centre.jpg", link_URL: "Courts/wairoa_community_centre.html"},
              {name: "Kirkpatrick Park", place: "Hastings", thumbs_up: 14, thumbs_down: 3, image_URL: "Images/kirkpatrick_park.jpg", link_URL: "Courts/kirkpatrick_park.html"},
              {name: "Mitre 10 Park", place: "Hastings", thumbs_up: 28, thumbs_down: 7, image_URL: "Images/mitre_10_park.jpg", link_URL: "Courts/mitre_10_park.html"},
              {name: "Russell Park", place: "Central Hawkes Bay", thumbs_up: 5, thumbs_down: 5, image_URL: "Images/russell_park.jpeg", link_URL: "Courts/russell_park.html"},
              {name: "Anderson Park", place: "Napier", thumbs_up: 15, thumbs_down: 2, image_URL: "Images/anderson_park.jpg", link_URL: "Courts/anderson_park.html"},
              {name: "William Nelson Park", place: "Hastings", thumbs_up: 17, thumbs_down: 0, image_URL: "Images/william_nelson_park.png", link_URL: "Courts/william_nelson_park.html"},
              {name: "Roberts Terrace Park", place: "Napier", thumbs_up: 11, thumbs_down: 4, image_URL: "Images/roberts_terrace_reserve.jpg", link_URL: "Courts/roberts_terrace_reserve.html"},
              {name: "Len Harlen Park", place: "Hastings", thumbs_up: 7, thumbs_down: 0, image_URL: "Images/len_harlen_park.png", link_URL: "Courts/len_harlen_park.html"}]
            
function display_courts() {
    courts.sort((a, b) => b.thumbs_up - a.thumbs_up);
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
                                </div>
                                    <p>👍&nbsp;&nbsp;${courts[i].thumbs_up}&nbsp;&nbsp;&nbsp;&nbsp;👎&nbsp;&nbsp;${courts[i].thumbs_down}</p>
                                    <br>
                                <div class="button-wrapper"><a class="button-1" href=${courts[i].link_URL}>View Court</a></div>
                            </div>`;

                            htmlContent += courtContent;
    }
    document.getElementById("courtsBox").innerHTML = htmlContent;
}




function contact() {
    alert('Your message has been sent.')
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
    let searchResult = 0
    let filter = input.value
    if (filter.length > 0) {
        document.getElementById("searchText").style.display = "block"; 
    } else {
        document.getElementById("searchText").style.display = "none";
    }
    
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block";
        
        searchResult ++
    } else {
        courts[i].style.display = "none";   
    }
    }

    if (searchResult == 0 && filter.length > 0) {
        document.getElementById("no_results").style.display = "block";
        document.getElementById("searchText").style.display = "none";

    } else {
        document.getElementById("no_results").style.display = "none";
    }
    
    
}




var Napier = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Napier"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var Hastings = () => {
    
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Hastings"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var Wairoa = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Wairoa"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var CHB = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Central Hawkes Bay"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}


var TopRated= () => {
    let Top3RatedCourts = courts.slice(0, 3);
    let htmlContent = "";

    for(let i = 0 ; i < Top3RatedCourts.length ; i++) {
        let courtContent = `<div class="Top3RatedCourts">
                                <img src=${courts[i].image_URL}>
                                <br>
                                <div class="courtBody">
                                    <h3>${courts[i].name}</h3>
                                    <br>
                                    <p>${courts[i].place}</p>
                                    <br>
                                </div>
                                    <p>👍&nbsp;&nbsp;${courts[i].thumbs_up}&nbsp;&nbsp;&nbsp;&nbsp;👎&nbsp;&nbsp;${courts[i].thumbs_down}</p>
                                    <br>
                                <div class="button-wrapper"><a class="button-1" href=${courts[i].link_URL}>View Court</a></div>
                            </div>`;

                        htmlContent += courtContent;
}

document.getElementById("Top3RatedCourts").innerHTML = htmlContent;
}


function voting(court_like_num, court_dislike_num) {

    let currentVotes = {like: court_like_num, dislike: court_dislike_num}
    
    //Variables to track the clicking status
    //RULE: Allow to vote only one: UP or DOWN
    let voteStatus = {like: false, dislike: false};

    this.like = function () {
        //Check current status of "like" button (has been clicked or not)
        if (voteStatus.like == false) {
            //Increase a "Like": Increase the like number by 1
            document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
            //Change the background color of Like button to GREEN
            document.getElementById("likeButton").style.backgroundColor = "green";
            //Change the current status of "like" button: has been clicked
            voteStatus.like = true;//
            
            //Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.dislike == true) {
                document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
                voteStatus.dislike = false;//
                document.getElementById("dislikeButton").style.backgroundColor = "white";
            }		
        } else {
            //Keep the current number of like
            document.getElementById("likeNumber").innerHTML = currentVotes.like;
            //Change the background color of Like button to WHITE
            document.getElementById("likeButton").style.backgroundColor = "white";
            //Change the current status of "like" button
            voteStatus.like = false;//has been clicked	
        }	
    }
    //Click Like button
    //Click Dislike button
    this.dislike = function () {
    //Check current status of "dislike" button (has been clicked or not)
        if (voteStatus.dislike == false) {
            //Increase a "disLike"  by 1
            document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
            //Change the background color of Like button to GREEN
            document.getElementById("dislikeButton").style.backgroundColor = "red";
            //Change the current status of "dislike" button
            voteStatus.dislike = true;//has been clicked
            
            //Check "like" status - if like has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.like == true) {
                document.getElementById("likeNumber").innerHTML = currentVotes.like;
                voteStatus.like = false;//
                document.getElementById("likeButton").style.backgroundColor = "white";
            }
            
        } else {
            //Keep the current number of of "dislike"
            document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
            //Change the background color of disLike button to WHITE
            document.getElementById("dislikeButton").style.backgroundColor = "white";
            //Change the current status of "dislike" button
            voteStatus.dislike = false;//has been clicked	
        }	
    }	
}


window.onload = function() {
    if (window.location.href.indexOf('napier.html') > -1) {
        display_courts();
        Napier();
    }
    if (window.location.href.indexOf('hastings.html') > -1) {
        display_courts();
        Hastings();
    }
    if (window.location.href.indexOf('home.html') > -1) {
        display_courts();
        TopRated();
    }
    if (window.location.href.indexOf('wairoa.html') > -1) {
        display_courts();
        Wairoa();
    }
    if (window.location.href.indexOf('central_hawkes_bay.html') > -1) {
        display_courts();
        CHB();
    }

    if (window.location.href.indexOf('marine_parade.html') > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[0].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[0].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf('flaxmere_park.html') > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[2].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[2].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf('fitzgerald_place_reserve.html') > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[1].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[1].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("st_joseph's_school.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[3].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[3].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("wairoa_community_centre.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[4].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[4].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("kirkpatrick_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[5].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[5].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("mitre_10_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[6].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[6].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("russell_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[7].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[7].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("roberts_terrace_reserve.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[10].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[10].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("william_nelson_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[9].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[9].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("anderson_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[8].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[8].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("len_harlen_park.html") > -1) {
        court_like_num = document.getElementById("likeNumber").innerHTML = courts[11].thumbs_up;
        court_dislike_num = document.getElementById("dislikeNumber").innerHTML = courts[11].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
  }
