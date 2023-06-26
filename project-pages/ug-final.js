/*
 * This is the JS file used to implement the UI, click functions, and the image slideshow
 * for my index.html page.
 */

"use strict";
(function() {

  window.addEventListener('load', init);

  // An array of image captions
  const imgCaption = [
    "Mt. Rainier and Drumheller Fountain",
    "Red Square in a rainy evening",
    "The bus stop I get off at for UW Seattle",
    "Portage Bay in the afternoon",
    "Sunset from my house in Bellevue",
    "The UW Cherry Blossoms!",
    "Small flowers outside my house",
    "Cherry blossoms again, this time with a large crowd...",
    "Fritz Hedges Park",
    "The Amazon Spheres",
    "The street going to Pike Place Market",
    "Elliot Bay",
    "Cherry Blossoms with fallen flowers",
    "Cherry Blossons with fallen flowers pt. 2",
  ];

  let currentImg = 0;

  /**
   * Sets up the buttons and the class sections, and adds the first photo to the slideshow
   */
  function init() {
    let classes = qsa("#current h2 + ul li, #taken h2 + ul li");
    for (let i = 0; i < classes.length; i++) {
      classes[i].addEventListener('click', visible);
    }

    id("left").addEventListener('click', direction);
    id("right").addEventListener('click', direction);
    changeImg();
  }

  /**
   * Determines which button (left/right) was clicked and updates the current image shown
   */
  function direction() {
    if (this.id === "left") {
      if (currentImg === 0) {
        currentImg = imgCaption.length - 1;
      } else {
        currentImg--;
      }
    } else if (this.id === "right") {
      if (currentImg === imgCaption.length - 1) {
        currentImg = 0;
      } else {
        currentImg++;
      }
    }
    changeImg();
  }

  /**
   * Changes the current image in the "Top Shots" section
   */
  function changeImg() {
    let image = gen("img");
    image.src = "photos/pic_" + currentImg + ".jpg";
    image.alt = imgCaption[currentImg];
    let caption = gen("figcaption");
    caption.textContent = "" + (currentImg + 1) + "/14 : " + imgCaption[currentImg];
    if (!id("img-slide").hasChildNodes()) {
      id("img-slide").appendChild(image);
      id("img-slide").appendChild(caption);
    } else {
      id("img-slide").replaceChild(image, qs("#img-slide > img"));
      id("img-slide").replaceChild(caption, qs("#img-slide figcaption"));
    }
  }

  /**
   * Toggles visibility of the description or topic of a class I am taking or have taken
   * on clicking the class code
   * @param {Event} event : The event object for the class code clicked
   */
  function visible(event) {
    let chosen = event.currentTarget.childNodes[1];
    chosen.classList.toggle("visible");
  }

  /**
   * Returns the element with the passed ID value
   * @param {string} idName : The id of the element
   * @returns {Element} : The object associated with the passed id
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns a list of elements that match with the passed CSS selectors
   * @param {String} selector : One or more CSS selectors to select elements
   * @returns {NodeList} : A list of elements that match the given CSS selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the passed CSS selector
   * @param {string} selector : One or more CSS selectors to select elements
   * @returns {Element} : The first element matching the given selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the passed tag name
   * @param {string} tagName : The tag name for the new DOM element
   * @returns {Element} : a new element with the given tag name
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();