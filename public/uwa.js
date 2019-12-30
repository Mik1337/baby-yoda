function changeWallpaper() {
  images = [
    "https://wallpapercave.com/wp/wp4976541.jpg",
    "https://wallpapercave.com/wp/wp4959346.jpg",
    "https://wallpapercave.com/wp/wp4959348.jpg",
    "https://wallpapercave.com/wp/wp4976540.jpg",
    "https://wallpapercave.com/wp/wp4976542.jpg",
    "https://wallpapercave.com/wp/wp4976547.jpg",
    "https://wallpapercave.com/wp/wp4976550.jpg",
    "https://wallpapercave.com/wp/wp4976551.jpg"
  ];
  document.getElementsByTagName("body")[0].style.backgroundImage = `url(${
    images[Math.floor(Math.random() * images.length)]
  })`;
}

function timer() {
  time = Number(document.getElementsByClassName("time")[0].innerHTML);
  Object.values(document.getElementsByClassName("time")).forEach(
    i => (i.innerHTML = time + 1)
  );
  setTimeout(timer, 1000);
}

function tweet() {
  time = Number(document.getElementsByClassName("time")[0].innerHTML);
  document.getElementById(
    "updateMe"
  ).href = `https://twitter.com/intent/tweet?text=I've received Baby Yoda's blessing for ${time} seconds`;
}
