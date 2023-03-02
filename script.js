// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");
let shuffle = document.querySelector(".shuffle");

let length = document.querySelector(".length");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let imageDisplay = document.querySelector(".display-image");
let songDisplay = document.querySelector(".display-song");
let artistDisplay = document.querySelector(".display-artist");
let songLinkDisplay = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

const imageArr = [];
const songsArr = [];
const artistsArr = [];
const linksArr = [];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

var song0 = {image:"https://i.ytimg.com/vi/tzMGDIU_-ow/maxresdefault.jpg", name:"Counting Stars", artist:"OneRepublic", link:"https://www.youtube.com/watch?v=hT_nvWreIhg"};
var song1 = {image:"https://i.ytimg.com/vi/v97FPN2US2o/maxresdefault.jpg", name:"Daylight", artist:"Joji", link:"https://www.youtube.com/watch?v=v97FPN2US2o"};
var song2 = {image:"https://i.ytimg.com/vi/IiOOQp5TAzQ/maxresdefault.jpg", name:"Vida La Vida", artist:"Coldplay", link:"https://www.youtube.com/watch?v=dvgZkm1xWPE"};
var song3 = {image:"https://i.ytimg.com/vi/3zh9Wb1KuW8/maxresdefault.jpg", name:"Shinunoga E-Wa", artist:"Fuiji Kaze", link:"https://www.youtube.com/watch?v=3zh9Wb1KuW8"};
var song4 = {image:"https://i.ytimg.com/vi/v7bnOxV4jAc/maxresdefault.jpg", name:"LILAC", artist:"IU", link:"https://www.youtube.com/watch?v=v7bnOxV4jAc"};
let songs = [song0, song1, song2, song3, song4];
// console.log(songs);

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  var song = {};
  song["image"] = image.value;
  song["name"] = songName.value;
  song["artist"] = artist.value;
  song["link"] = songLink.value;
  
  // userImageLink = image.value;
  // userSongName = songName.value;
  // userArtist = artist.value;
  // userSongLink = songLink.value;

// task 10: use `.push()` to add each input value to the correct array.
  songs.push(song);
  
  // imageArr.push(userImageLink);
  // songsArr.push(userSongName);
  // artistsArr.push(userArtist);
  // linksArr.push(userSongLink);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  imageDisplay.innerHTML = "";
  songDisplay.innerHTML = "";
  artistDisplay.innerHTML = "";
  songLinkDisplay.innerHTML = "";
}


function displaySongInfo() {

  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    display.insertAdjacentHTML("beforeend", `
      <a href=${song.link}>
        <div class="song">
          <div>
            <img src=${song.image}>
          </div>
          <div>
            <h3>${song.name}</h3>
            <p>${song.artist}</p>
          </div>
        </div>
      </a>
    `)
    // imageDisplay.insertAdjacentHTML("beforeend", `<img src=${song.image} class="center">`);
    // songDisplay.insertAdjacentHTML("beforeend", `<p class="center">${song.name}</p>`);
    // artistDisplay.insertAdjacentHTML("beforeend", `<p class="center">${song.artist}</p>`);
    // songLinkDisplay.insertAdjacentHTML("beforeend", `<a href=${song.link} class="center">${song.link}</a>`);
  }
  
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  
  // for (let i = 0; i < imageArr.length; i++) {
  //   imageDisplay.insertAdjacentHTML("beforeend", `<img src=${imageArr[i]}>`)
  // }
  // for (let i = 0; i < songsArr.length; i++) {
  //   songDisplay.insertAdjacentHTML("beforeend", `<p>${songsArr[i]}</p>`)
  // }
  // for (let i = 0; i < artistsArr.length; i++) {
  //   artistDisplay.insertAdjacentHTML("beforeend", `<p>${artistsArr[i]}</p>`)
  // }
  // for (let i = 0; i < linksArr.length; i++) {
  //   songLinkDisplay.insertAdjacentHTML("beforeend", `<a href=${linksArr[i]}>${linksArr[i]}</a>`)
  // }

}

//shuffles the array
function shuffleSongs() {
  songs.sort(function(){return 0.5 - Math.random()});
}

function clearSongs() {
  songs.length = 0;
}

function displayLength() {
  length.innerHTML = "Playlist Length: " + songs.length;
}

// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displayLength();
  displaySongInfo();
};

clear.onclick = function() {
  emptyDisplay();
  clearSongs();
  displayLength();
  displaySongInfo();
}

shuffle.onclick = function() {
  emptyDisplay();
  shuffleSongs();
  displayLength();
  displaySongInfo();
};

// function call to display stored songs
displayLength();
displaySongInfo();
