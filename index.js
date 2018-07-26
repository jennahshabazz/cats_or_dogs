function toggleVoteContainer(){
  //find the cote container on web page
  var voteContainer = document.getElementById("vote-container");

  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;

  //convert string to integer
  likes = parseInt(likes);

  //increase likes by value 1
  likes += 1;

  //change value of likes on page
  element.innerText = likes;

//gives an array of all the elements with the class name "score"
  var scores = document.getElementsByClassName("score");

  //get the first element
  var scores = scores[0];
  scores.style.color = "black";
}
//array of links to dog images
var dogImages = ["https://cdn.vox-cdn.com/thumbor/wng90rt7pFT3o_oPRNV21iK-2x8=/0x0:4560x3041/1200x800/filters:focal(1916x1157:2644x1885)/cdn.vox-cdn.com/uploads/chorus_image/image/58504395/911428568.jpg.0.jpg", "https://i2-prod.mirror.co.uk/incoming/article9769854.ece/ALTERNATES/s615/PROD-Mixed-breed-lab-cross-8-week-old-puppy-in-farm-yard-near-Cochrane-AlbertajpgED.jpg", "https://d3jkudlc7u70kh.cloudfront.net/fun-facts-about-dogs.jpg"];

//array of links to cat images
var catImages = ["https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/03/07/catmoney.jpg", "https://xenlife.com.au/wp-content/uploads/cat-care_urine-marking_main-image.jpg", "http://cdn.themindcircle.com/wp-content/uploads/2016/10/worlds-most-beautiful-cats-5.jpg"];

function changeImage(element) {
var animals = [];


  if(element.id === "cats-carousel"){
    animals = catImages;
  }else {
    animals = dogImages;
  }

var carousel = document.getElementById(element.id);

//get img
var image = carousel.getElementsByTagName('img')[0];

//get img url on page
var imageUrl = image.getAttribute('src');
console.log(imageUrl);

//swap img image
var imageIndex = animals.indexOf(imageUrl);

//add 1 to the index; rest to 0 if last element in amimals
if(imageIndex === animals.length - 1){
  imageIndex = 0;
 }else {
   imageIndex += 1;
}

//reset url to the new url using the new index
imageUrl = animals[imageIndex];

//change the src for the img element
image.src = imageUrl;

}
