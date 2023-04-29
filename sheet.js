// Get the navigation links
const homeLink = document.querySelector("nav ul li:first-child a");
const aboutLink = document.querySelector("nav ul li:nth-child(2) a");
const blogLink = document.querySelector("nav ul li:nth-child(3) a");
const contactLink = document.querySelector("nav ul li:last-child a");

// Add an active class to the clicked link
function setActiveLink(link) {
  // Remove active class from all links
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  blogLink.classList.remove("active");
  contactLink.classList.remove("active");

  // Add active class to the clicked link
  link.classList.add("active");
}

// Add click event listeners to the navigation links
homeLink.addEventListener("click", function () {
  setActiveLink(homeLink);
});

aboutLink.addEventListener("click", function () {
  setActiveLink(aboutLink);
});

blogLink.addEventListener("click", function () {
  setActiveLink(blogLink);
});

contactLink.addEventListener("click", function () {
  setActiveLink(contactLink);
});

// Change the background color of the header when scrolled
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > header.offsetHeight) {
    header.style.backgroundColor = "#555";
  } else {
    header.style.backgroundColor = "#333";
  }
});

// Add a button to the page that scrolls to the top when clicked
const topButton = document.createElement("button");
topButton.textContent = "Top";
topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.body.appendChild(topButton);