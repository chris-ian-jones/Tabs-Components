class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    // console.log(this.element)    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('div.dropdown-button');
    // console.log(this.button)
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('div.dropdown-content');
    // console.log(this.content)
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden') ;
    
    // Stretch added animation to dropdown menu, move menu position down from 150px above
    // Tween 'from' function takes in element to animate, duration, and object of properties to change
    TweenLite.from(this.content, 0.5, {y:-150})
    // added animation to dropdown menu, easeIn the opacity from 0 to 1
    TweenLite.from(this.content, 0.5, {ease: Power4.easeIn, opacity: 0})
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
