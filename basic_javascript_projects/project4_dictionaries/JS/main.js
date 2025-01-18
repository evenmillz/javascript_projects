// Created a Dictionary with a function that outputs key-value pairs
// into my HTML <p> element
function first_Dictionary() {
    let Student = {
        Name: "Even",
        Age: 41,
        Program: "AI Developer",
        Course: "JavaScript",
        HowStudy: "Online"
    };

// Wrote a delete statement that removes the key 'Name' before its 
// value is displayed    
    delete Student.Name;

// Utilized the document.getElementByID method to display a dictionary value   
    document.getElementById("Dictionary").innerHTML = Student.Name;
}

