// Home Page Awards Slider
$(document).ready(function () {
  $(".slick-slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//   Home Page Typing Text
const typewriterEl = document.querySelector(".typewriter");
const target = document.getElementById("text-typing");
const lines = JSON.parse(typewriterEl.getAttribute("data-lines"));

let i = 0; // character index
let lineIndex = 0; // line index
const speed = 100;
const delayAfterLine = 2000;

function typeLine() {
  const currentLine = lines[lineIndex];
  if (i <= currentLine.length) {
    target.innerHTML = currentLine.slice(0, i + 1);
    i++;
    setTimeout(typeLine, speed);
  } else {
    setTimeout(() => {
      i = 0;
      lineIndex = (lineIndex + 1) % lines.length;
      target.innerHTML = "";
      typeLine();
    }, delayAfterLine);
  }
}

typeLine();

// Gallery Light Box
$(document).ready(function () {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox", "mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function () {
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".gallery a").fancybox();
});
