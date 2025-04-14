// --- Home Page Awards Slider ---
$(document).ready(function () {
  // Initialize the slick slider
  $(".slick-slider").slick({
    arrows: true, // Enable navigation arrows
    dots: false, // Disable dots navigation
    slidesToShow: 3, // Show 3 slides by default
    autoplay: true, // Enable autoplay
    speed: 1000, // Set slide transition speed
    autoplaySpeed: 1000, // Set autoplay speed
    prevArrow: $(".custom-prev"), // Custom previous arrow
    nextArrow: $(".custom-next"), // Custom next arrow
    responsive: [
      {
        breakpoint: 768, // For screen sizes below 768px
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 550, // For screen sizes below 550px
        settings: {
          slidesToShow: 1, // Show 1 slide on extra small screens
        },
      },
    ],
  });
});

// --- Home Page Typing Text Animation ---
const typewriterEl = document.querySelector(".typewriter"); // Get the typewriter element
const target = document.getElementById("text-typing"); // Get the target element to display typing text
const lines = JSON.parse(typewriterEl.getAttribute("data-lines")); // Parse the lines from the 'data-lines' attribute

let i = 0; // Character index for typing
let lineIndex = 0; // Line index for switching between lines
const speed = 100; // Speed of typing (ms per character)
const delayAfterLine = 2000; // Delay between lines

// Function to simulate the typing effect
function typeLine() {
  const currentLine = lines[lineIndex]; // Get the current line to type
  if (i <= currentLine.length) {
    target.innerHTML = currentLine.slice(0, i + 1); // Display the typed characters
    i++;
    setTimeout(typeLine, speed); // Continue typing the next character
  } else {
    setTimeout(() => {
      i = 0; // Reset character index
      lineIndex = (lineIndex + 1) % lines.length; // Move to the next line, loop back to the start if at the end
      target.innerHTML = ""; // Clear the target element
      typeLine(); // Start typing the next line
    }, delayAfterLine); // Wait for the delay before starting the next line
  }
}

typeLine(); // Start the typing animation

// --- Gallery Lightbox with Fancybox ---
$(document).ready(function () {
  // Assign all images in the gallery to the same Fancybox gallery
  $(".gallery a").attr("data-fancybox", "mygallery");

  // Set captions and titles from the 'alt' attribute of the images
  $(".gallery a").each(function () {
    const altText = $(this).find("img").attr("alt");
    $(this).attr("data-caption", altText); // Set caption for Fancybox
    $(this).attr("title", altText); // Set title for the image
  });

  // Initialize Fancybox for the gallery
  $(".gallery a").fancybox();
});

// --- Custom Cursor Animation ---
const cursor = document.querySelector(".cursor"); // Get the cursor element

// Update the position of the custom cursor based on mouse movement
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`; // Update cursor's horizontal position
  cursor.style.top = `${e.clientY}px`; // Update cursor's vertical position
});

// Aos Initialization
AOS.init();