var playerOne = prompt("Please input the player one's name.");
var palyerTwo = prompt("Please input the second player's name.")
var playerOneColor = 'rgb(86, 151, 255)';
var playerTwoColor = 'rgb(237, 45, 73)';
var table = $('table tr');
var game_on = true;

// function updatestatue(){
//     console.log('debug')
//     if(round % 2 == 0){
//         $('#statue').text(playerOne + "'s Round.");
//     } else {
//         $('#statue').text(palyerTwo + "'s Round.")
//     }
// }


// $('#welcome').click(function(){
//     console.log("There was a click!");
//   })
  
// $('h1').click(function(){
//     updatestatue();
//     console.log('debug2')
//     round += 1;
// })

// $('h3').text('just for fun')

function reportWin(rowNum, colNum){
    console.log("You won starting at this row, col");
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(rowIdx, colIdx, color){
    return table.eq(rowIdx).find('td').eq(colIdx).find('button').css('background-color', color);
}

// function getColor(rowIdx, colIdx){
//     return table.eq(rowIdx).find('td').eq(colIdx).find('button').css('background-color');
// }
function getColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
  }
  
function checkBottom(colIndex){
    var colorRepo = getColor(5, colIndex);
    for (var row = 5; row > -1; row -- ){
        cRepo = getColor(row, colIndex);
        if(cRepo === 'rgb(128, 128, 128)'){
            return row;
        }
    }
}

function colorMatchCheck(one, two, three, four){
    return (one===two && one===three && one===four && one!=='rgb(128, 128, 128)' && one !== undefined);
}
// function colorMatchCheck(one,two,three,four){
//     return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
//   }
  
// function horizontalWinCheck(){
//     for (var row = 0; row < 6; row ++){
//         for (var col = 0; col < 4; col ++){
//             if (colorMatchCheck(getColor(row, col), getColor(row, col+1), getColor(row, col+2), getColor(row, col+3))){
//                 reportWin(row,col);
//                 return true;
//             }else{
//                 continue;
//             }
//         }
//     }
// }

function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(getColor(row,col), getColor(row,col+1) ,getColor(row,col+2), getColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  

function verticalWinCheck(){
    for (var col = 0; col < 7; col++){
        for (var row = 0; row < 3; row ++){
            if(colorMatchCheck(getColor(row, col), getColor(row+1, col), getColor(row+2, col), getColor(row + 3, col))){
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
        }
    }
}

function diagonalWinCheck(){
    for (var col = 0; col < 5; col++){
        for (var row = 0; row < 7 ; row ++){
            if (colorMatchCheck(getColor(row, col), getColor(row+1, col+1), getColor(row+2, col+2), getColor(row+3, col+3))){
                reportWin(row, col);
                return true;
            }else if (colorMatchCheck(getColor(row, col), getColor(row-1, col+1), getColor(row-2, col+2), getColor(row-3, col+3))){
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
        }
    }
}

function gameend(winningPlayer){
    for (var col = 0; col < 7 ; col ++){
        for (var row =0 ; row < 7 ; row++){
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(winningPlayer +'has won!').css('fontSize', '50px');
        }
    }
}

var curPlayer = 1;
var curName = playerOne;
var curColor = playerOneColor;
console.log('1')

$('h3').text(playerOne + ":'s turn.")
$('.board button').on('click',function(){
    console.log('1')

    var col = $(this).closest("td").index();
    var bottomAvail = checkBottom(col);
    changeColor(bottomAvail, col, curColor);
    console.log('1')
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
        gameend(curName);
    }
    curPlayer = curPlayer * -1;
    if (curPlayer === 1){
        curName = playerOne;
        $('h3').text(playerOne + ":'s turn.")
        curColor = playerOneColor;
    }else{
        curName = palyerTwo;
        $('h3').text(curName + ":'s turn.")
        curColor = playerTwoColor;
    }
})

// $('.board button').on('click',function() {

//     // Recognize what column was chosen
//     var col = $(this).closest("td").index();
  
//     // Get back bottom available row to change
//     var bottomAvail = checkBottom(col);
  
//     // Drop the chip in that column at the bottomAvail Row
//     changeColor(bottomAvail,col,curColor);
  
//     // Check for a win or a tie.
//     if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
//       gameend(curName);
//     }
  
//     // If no win or tie, continue to next player
//     curPlayer = curPlayer * -1 ;
  
//     // Re-Check who the current Player is.
//     if (curPlayer === 1) {
//       curName = playerOne;
//       $('h3').text(curName+": it is your turn, please pick a column to drop your blue chip.");
//       curColor = playerOneColor;
//     }else {
//       curName = playerTwo;
//       $('h3').text(curName+": it is your turn, please pick a column to drop your red chip.");
//       curColor = playerTwoColor;
//     }
  
//   })
  