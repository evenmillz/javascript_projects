function a_Jax() {
    //STEP 1: Setup the XML HTTP request object
    let ajaxRequest = new XMLHttpRequest();

    //STEP 2: Prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'newText.html', true);

    //STEP 3: Defines the AJAX response callback method that 
    // established whether the response was successful and where 
    // the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('newWords').innerHTML = ajaxRequest.responseText;
        }
    }

    //STEP 4: Send the request 
    ajaxRequest.send();
}