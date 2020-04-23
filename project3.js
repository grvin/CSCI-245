// unobtrusive
function clickMe(){
    $("reveal").onclick = showOps;
}
window.onload = clickMe;


function showOps(){
    var clicked = $("clicked");
    if (clicked != null)
        return;



//create objects
var button2 = document.createElement ("button");
button2.id="clicked";
var button3 = document.createElement ("button");
var button4 = document.createElement ("button");
var button5 = document.createElement ("button");

//set innerHTML property
button2.innerHTML = "(1) Test for triangle";
button3.innerHTML = "(2) Test for right triangle";
button4.innerHTML = "(3) Test both (1) & (2)";
button5.innerHTML = "(4) Clear All";


//append new objects to child of DOM tree
var area = $("buttonArea");
area.appendChild(button2);
area.appendChild(button3);
area.appendChild(button4);
area.appendChild(button5);

//attach event handlers
button2.onclick = testTri;
button3.onclick = testRightTri;
button4.onclick = computeBoth;
button5.onclick = Clear;

}




function testTri() {
    var A = $("sideA");
    var B = $("sideB");
    var C = $("sideC");
    var result = $("isTri");

    // all statements must be true, use &&
    if(parseInt(A.value)+parseInt(B.value)>parseInt(C.value) && 
    parseInt(A.value)+parseInt(C.value)>parseInt(B.value) && 
    parseInt(B.value)+parseInt(C.value)>parseInt(A.value) == true){
        result.innerHTML = "These three values form a triangle!";
    }
    else
    {
        result.innerHTML= "These three sides can not form a triangle :(";
    }
  }

  function testRightTri() {
    var A = $("sideA");
    var B = $("sideB");
    var C = $("sideC");
    var result = $("isRightTri");

    //power function on top of parseInt
    if( Math.pow(parseInt(A.value), 2) + Math.pow(parseInt(B.value), 2) == Math.pow(parseInt(C.value), 2)||
        Math.pow(parseInt(A.value), 2) + Math.pow(parseInt(C.value), 2) == Math.pow(parseInt(B.value), 2)||
        Math.pow(parseInt(B.value), 2) + Math.pow(parseInt(C.value), 2) == Math.pow(parseInt(A.value), 2)){
            result.innerHTML = "These three values form a right triangle!";
    }
    else
    {
        result.innerHTML= "These three sides can not form a right triangle :(";
    }
  }


function computeBoth(){
    
    testTri();
    testRightTri();
}

function Clear(){
    $("sideA").value = "";
    $("sideB").value = "";
    $("sideC").value='';
    $("isTri").innerHTML='';
    $("isRightTri").innerHTML='';
}