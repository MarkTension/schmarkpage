
    function scrollDown(element) {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    }


// photography page: select project



// highlight icons when hovered over
function hover(element) {
    element.setAttribute('src', 'images/music1.jpg');
    var dynamo = document.getElementById('dynamic');
    dynamo.setAttribute('src', 'images/selfhelp2.jpg');
    dynamo.setAttribute('width', '50%');

}
function unhover(element) {
    element.setAttribute('src', 'images/music0.jpg');
}

function hoverTwo(element) {
    element.setAttribute('src', 'images/photography1.jpg');
    var dynamo = document.getElementById('dynamic');
    dynamo.setAttribute('src', 'images/feng1.jpg');
}
function unhoverTwo(element) {
    element.setAttribute('src', 'images/photography0.jpg');
}

function hoverThree(element) {
    element.setAttribute('src', 'images/words1.jpg');
    var dynamo = document.getElementById('dynamic');
    dynamo.setAttribute('src', 'images/clouds.jpg');
}
function unhoverThree(element) {
    element.setAttribute('src', 'images/words0.jpg');
}

function hoverFour(element) {
    element.setAttribute('src', 'images/podcast1.jpg');
    var dynamo = document.getElementById('dynamic');
    dynamo.setAttribute('src', 'images/QLC.jpg');
}
function unhoverFour(element) {
    element.setAttribute('src', 'images/podcast0.jpg');
}


// Post and retrieve from database

function submitClick(jaja) {

    var firebaseRef = firebase.database().ref();
    //window.alert("poooop " + jaja );
    
    firebaseRef.child("text").push(jaja);

    // make something to hide the form

    // retrieve data
 
}