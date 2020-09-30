// P1 = true; P2 = false
var turn = true;
var testIt = [];
var steps = [];
var startingSquares = [];

var defacto = $('.testClass')

// defacto.value = (Number(defacto.value));

var height = Math.round(Math.sqrt(defacto.length + 1));
var width = defacto.length/height

var boardSize = $('.size')

function changeSize(size){
    size = Number(size);

    if(boardSize[size].value = 1){
        // change width to 1
    }
}

// Assign value of +1 for P1, -1 for P2;
function clicked(identifier){
    // console.log(identifier.value);
    identifier = Number(identifier);
    // console.log(defacto[identifier].value);
    // Check to see if button has been pushed
    if(defacto[identifier].value == 0){
        // identifier.value returns a STRING
    if(turn){
        defacto[identifier].value = 1;
        defacto[identifier].classList.remove("default")
        defacto[identifier].classList.add("p1");
        defacto[identifier].textContent = "X";
} else {
    defacto[identifier].value = -1;
    defacto[identifier].classList.remove("default")
    defacto[identifier].classList.add("p2");
    defacto[identifier].textContent = "O";
}

// Change turn
masterTest();
turn = !turn}}

function reset(){
    var i;
    for(i=0; i<defacto.length; i++){
        defacto[i].classList.add("default");
        defacto[i].classList.remove("p1");
        defacto[i].classList.remove("p2");
        defacto[i].textContent = "";
        defacto[i].value = 0;
    }
    turn = true;

}



// function masterTest(){
//     // run a loop for 0, 1, 2, 3 ... pass loop to start Squares
//    for(var i=0; i<4; i++)
//         {
//         startSquares(i);
//         for(var j=0; j<startingSquares.length; j++){}
        
//         calcSteps(startingSquares[j], i);
 
//             testWin();
//         }
// }

function calcSteps(start,type) {
    steps = [];
    switch (type) {
        case 0 : 
            steps.push(start, start+1, start+2);
            // console.log(steps);
        break;

        case 1 : 
            steps.push(start, start+width, start+(width*2));
        break;

        case 2 : 
            steps.push(start, start-(width-1), start-(2*(width-1)));       
        break;

        case 3 : 
            steps.push(start, start+(width+1), start+(2*(width+1)));
        break;

        default:
            console.log("type not found");
        break;
    }
}
 
function startSquares(type) {
    startingSquares = [];
    switch (type) {
        // horizontal
        case 0 : 
            for(var i = 0; i<height; i++){
                for(var j = 0; j<width-2; j++){
                      var row = j + (i*height);
              startingSquares.push(row)
           
        }}
        // console.log(startingSquares);
        break;

        // vertical
        case 1 : 
            for(var i=0; i<height-2; i++)
           
            // 0, 5, 10
            {
                for(var j=0; j<width; j++){
                    var row = i*width;
                    col = row+j;
                    startingSquares.push(col);
                }
                
            }
            // console.log(startingSquares)
        break;

        // diagonal up
        // [10, 11, 12 ... 15, 16, 17 ... 20, 21, 22]
        case 2 : 
            for(var i=2; i<width; i++){
                {for(j=0; j<height-2; j++){
                    var col = (i*height)+j;
                    startingSquares.push(col);
                    // console.log(startingSquares);
                }
            }}
        // console.log(startingSquares);   
        break;

        // diagonal down
        // 0, 1, 2 ... 5,6,7 ... 8,9,10
        case 3 : 
        for(var i = 0; i<height-2; i++){
            for(var j = 0; j<width-2; j++){
                  var row = j + (i*height);
          startingSquares.push(row)
       
    }}
        // console.log(startingSquares);
        break;

        default:
            console.log("type not found");
        break;
    }
}

function testWin(){
    if(Number(defacto[steps[0]].value) + (Number(defacto[steps[1]].value))+ (Number(defacto[steps[2]].value)) == 3) 
    { 
		alert("PLAYER 1 WINS");
		alert("Play again?");
		reset();
	}
    else if(Number(defacto[steps[0]].value) + (Number(defacto[steps[1]].value))+ (Number(defacto[steps[2]].value)) == -3) 
    { 
		alert("PLAYER 2 WINS")
		alert("Play again?");
		reset();
	}
}

// PSEUDO CODE!
// (how it is that we know someone won)
function masterTest(){
    // SET UP LOOP TO ITERATE THROUGH LINE TYPES
    for(var i=0; i<4; i++)
    // 0 = HORIZONTAL; 1 = VERTICAL; 2- DIAG DOWN; 3 - 
            {
            // FIGURE OUT THE SQUARES WE NEED TO TEST
            startSquares(i);
    
        // SET UP A LOOP TO TEST THOSE SQUARES
            for(z=0; z<startingSquares.length; z++) {
              
        // FIGURE OUT THE APPROPRIATE TWO SQUARES TO TEST ALONG WITH THE SQUARE FOR THIS ITERATION;
            calcSteps(startingSquares[z], i);
        // LOOP THROUGH AND TEST SQUARES FOR WIN CONDITIONS USING DETERMINE "OTHER 2" SQUARES;
            testWin();
        // IF(WIN), INFORM USER
            }
        }
    };



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// function build(){
// if((defacto.length/height)==3){
// $('.container').css("grid-template-columns", "repeat(3, max-content)");
// } else if((defacto.length/height)==4){
// 	$('.container').css("grid-template-columns", "repeat(4, max-content)");
// } else{
// 		$('.container').css("grid-template-columns", "repeat(5, max-content)");
// 	};
// };


