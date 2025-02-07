// CONTACT FORM

// Validate form fields
function validateForm() {
    // Phone field validation
    let phone = document.forms["contactForm"]["phone"].value;
    if (!validatePhone(phone)) {
          alert("Wrong phone number format");
        return false;
    }
  }

// Validate phone number using RegEx
function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$|^\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$/;
    
    // Use built-in RegExp.prototype.test() function
    return phonePattern.test(phone);
}