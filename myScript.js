//set background color interval
setInterval(
    function() {
        var backGround = document.getElementById("main-container");
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        backGround.style.backgroundColor = '#'+randomColor;
    }, 1000);

//change paragraph content
function change(){
    var changeT = document.getElementById("change-text");
    changeT.innerHTML = "Text has changed!";
    changeT.style.fontSize = "30px";
    changeT.style.backgroundColor = "white";
}
//change image on mouse-hover
function replace(){
    document.getElementById("hello").src="img/do.jpg";
}

//check selection of gender
function checkG(){
    var firstGend = document.getElementById("male");
    var secondGend = document.getElementById("female");
    var message = document.getElementById("span1");
    if(firstGend.checked){
        message.innerHTML = "Selected Gender: Male";
    }
    else if(secondGend.checked){
        message.innerHTML="Selected Gender: Female";
    }
    else {
        message.innerHTML="You didn't choose any gender";
    }
}

//submit button opens a new page
function newPage() {
    window.location.assign("newpage.html");
}

// back button
function returnPage() {
    window.history.back();
}

//show input
function showInput(){
    var input1 = document.getElementById("fName").value;
    var input2 = document.getElementById("lName").value;
    var input3 = document.getElementById("animal").value;
    document.getElementById("firstName").innerHTML = input1;
    document.getElementById("lastName").innerHTML = input2;
    document.getElementById("fAnimal").innerHTML = input3;
}



  
    
