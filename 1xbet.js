var random_num = Math.floor(Math.random()*10)

var turn = 3

while(turn > 1){
    var num = parseInt( prompt("guess the number between 1 to 10 "))
        if(num == random_num){
            alert("ok boss");
            break;
        }

        else{turn -- }

    }


// for( var num1=1 ; num1<=3 ; num1++){
//     if(num == random_num ){
//         document.write("ok ")
//     }
//     else{
//         document.write("no ")
//     }
// }


// if(num1 == random_num){
//     document.write("winner")
// }
// else{
//     document.write("looser")
// }
