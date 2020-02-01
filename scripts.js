let shop = document.querySelector("shop");
let about = document.querySelector("about");
let images = document.querySelector("images");

var images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
  ];
  
  var img = document.querySelector('.hero');
  var index = 0;
  var iterations = 0;
  
  var updateImage = function() {
    /* reset index to zero if current index is greater than number of images.
     * increment iterations variable since it means we've done one whole loop.
     */
    if (index >= images.length) {
      index = 0;
      iterations++;
    }
  
    // set the background image
    hro.style.backgroundImage = 'url(' + images[index] + ')';
  
    /* clear interval (stop timer) when we've reached
     * the number of iterations allowed.
     */
    if (iterations >= 2) {
      clearInterval(interval);
    } else {
      /* increment current index in order to get next image
       * when this function gets called again.
       */
      index++;
    }
  }
  
  // update first image
  updateImage();
  
  // initiate timer
  var interval = setInterval(updateImage, 4000);