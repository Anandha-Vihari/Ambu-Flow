const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});

// Function to handle the active state of navbar items
function changeContent(page) {
    // Get all navigation links
    var links = document.querySelectorAll(".menu ul li a");

    // Remove the active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add the active class to the clicked link
    document.getElementById(page + "-link").classList.add("active");
}

// Make "Home" the default active page on load
window.onload = function () {
    document.getElementById("home-link").classList.add("active");
};

//JS for dark mode fuctionality
// Select the dark mode button
// Get the dark mode button element
const darkModeButton = document.getElementById('dark-mode-button');

// Add event listener for toggle functionality
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon between moon and sun
  const icon = darkModeButton.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');

  // Log the current classes for debugging
  console.log(icon.classList); // Check the classes being applied to the icon
});
