// NAVBAR SECTION

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.main-menu');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 576 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);


let navbar = document.querySelector('.header');

window.addEventListener("scroll", (event) => {
    let scrollPos = this.scrollY;
    console.log(scrollPos);

    let productsDisplay = window.getComputedStyle(productsSubMenu).getPropertyValue('visibility');
    let servicesDisplay = window.getComputedStyle(servicesSubMenu).getPropertyValue('visibility');


    if(scrollPos > 0 && productsDisplay === 'hidden' && servicesDisplay === 'hidden') {
        navbar.style.boxShadow = "0 16px 32px rgb(0 0 0 / 2%), 0 8px 72px rgb(0 0 0 / 8%)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// HERO SECTION

let productsBtn = document.querySelector('.products-btn');
let productsSubMenu = document.querySelector('.products-submenu');
let container = document.getElementById('headerContainer');

let servicesSubMenu = document.querySelector('.services-submenu');
let servicesBtn = document.querySelector('.services-btn');

let i=0;
let activeSubMenu = null;

productsBtn.addEventListener('click', () => {
  if (activeSubMenu === 'services') {
    servicesSubMenu.classList.remove('show');
    servicesBtn.style.color = "#1b1c21";
    i--;
  }
  if (i % 2 === 0) {
    productsSubMenu.classList.add('show');
    productsBtn.style.color = "#1062FE";
    activeSubMenu = 'products';
  } else {
    productsSubMenu.classList.remove('show');
    productsBtn.style.color = "#1b1c21";
    activeSubMenu = null;
  }

  i++;
});
  
servicesBtn.addEventListener('click', () => {
  if (activeSubMenu === 'products') {
    productsSubMenu.classList.remove('show');
    productsBtn.style.color = "#1b1c21";
    i--;
  }
  if (i % 2 === 0) {
    servicesSubMenu.classList.add('show');
    servicesBtn.style.color = "#1062FE";
    activeSubMenu = 'services';
  } else {
    servicesSubMenu.classList.remove('show');
    servicesBtn.style.color = "#1b1c21";
    activeSubMenu = null;
  }

  i++;
});
  
// FAQ SECTION

const menuItems = document.querySelectorAll('.menu-item');
const menuAs = document.querySelectorAll('.h6');

for (let j = 0; j < menuItems.length; j++) {
  const menuItem = menuItems[j];
  const menuButton = menuItem.querySelector('.menu-list-button');
  const menuA = menuAs[j];
  let isOpen = false;
  
  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (isOpen) {
      menuA.style.color = "#1b1c21";
      menuItem.classList.remove('menulist-active');
      isOpen = false;
    } else {
      menuA.style.color = "#1062FE";
      menuItem.classList.add('menulist-active');
      isOpen = true;
    }
  });

  menuA.addEventListener('mouseover', () => {
    menuA.style.color = "#1062FE";
  });

  menuA.addEventListener('mouseleave', () => {
    if (isOpen) {
      menuA.style.color = "#1062FE";
    } else {
      menuA.style.color = "#1b1c21";
    }
  });

}