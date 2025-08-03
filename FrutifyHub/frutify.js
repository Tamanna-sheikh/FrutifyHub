
// let x = document.querySelector('.nav-bar a');
// let menub = document.querySelector('#menu-button');

// function openMenu() {
//     x.style.display = 'block';
// }
// menub.addEventListener('click', openMenu);
// Get references to your menu icon and the element to toggle the class on
// document.addEventListener('DOMContentLoaded', () => {

  // Get a reference to the menu icon element using its ID
//   const menuIcon = document.querySelector('#manuicon');

//   // Get a reference to the navigation bar element (the parent of ul.nav-bar-ul)
//   const navBar = document.querySelector('.nav-bar'); // Or use $0.parentElement directly if this script runs after the DOM is ready

//   // Check if both elements were found
//   if (menuIcon && navBar) {
//     // Add a click event listener to the menu icon
//     menuIcon.addEventListener('click', () => {
//       // Toggle the 'nav-open' class on the navigation bar element
//       navBar.classList.toggle('nav-open');

//       // Optional: Also toggle a class on the icon itself to change its appearance (e.g., change to an 'X')
//       // menuIcon.classList.toggle('is-active');
//     });
//   } else {
//     console.error('Menu icon or nav bar element not found!');
//   }

// });
// document.addEventListener('DOMContentLoaded', () => {

  // Get references to the menu icon and cross icon elements
  const menuIcon = document.querySelector('#manuicon'); // Selector for your menu icon
  const crossIcon = document.querySelector('#crossicon'); // Selector for your cross icon

  // Get a reference to the navigation bar element (the parent that gets the 'nav-open' class)
  const navBar = document.querySelector('.nav.nav-bar'); // Selector for your nav bar

  // Check if the necessary elements were found
  if (menuIcon  && navBar) {

    // Add a click event listener to the MENU icon (opens the menu)
    menuIcon.addEventListener('click', () => {
      // Add the 'nav-open' class to the nav bar
      // This triggers the CSS to show the ul and swap the icons
      navBar.classList.add('nav-open');
    });
  }
     if(crossIcon && navBar)
     {
    // Add a click event listener to the CROSS icon (closes the menu)
    crossIcon.addEventListener('click', () => {
      // Remove the 'nav-open' class from the nav bar
      // This triggers the CSS to hide the ul and swap the icons back
      navBar.classList.remove('nav-open');
    });
     }
    // Optional: Close the menu if a link inside is clicked (common on mobile side navs)
    // Get a reference to the ul element if needed
    // const navUl = document.querySelector('.nav-bar-ul');
//     if (navUl) { // Check if navUl was found
//       navUl.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//           navBar.classList.remove('nav-open'); // Close the menu
//           // CSS will handle resetting icon/ul visibility
//         });
//       });
//     }

//   } else {
//     console.error('Menu icon, cross icon, or nav bar element not found!');
//   }

// });