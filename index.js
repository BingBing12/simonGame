//key to start
$(document).keypress(startGame)
var level = 1;
var counter = 0;
var colorOrder = [];
function startOver(){
    level = 1;
    counter = 0;
    colorOrder = [];
}
function addColor(){
    var color = '';
    var randomColor = Math.floor(Math.random()*4)+1;
    switch(randomColor){
        case 1:
            return "green";
            break;
        case 2:
            
            return 'red';
            break;
        case 3:
            
            return 'yellow';
            break;    
        case 4:
            
            return 'blue';
            break;
        default:
            console.log(randomColor)
    }
}


function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3" );
    audio.play();
}
function clickAnimation(color){
    $("." + color).addClass("pressed");
        setTimeout(function(){
            
            $("." + color).removeClass("pressed")
           
        }, 100);
        
}

function startGame(){
//generate color
    
    level = 1;
    counter = 0;
    colorOrder = [];
    var color = addColor();
    colorOrder.push(color);
    playSound(color);
    clickAnimation(color);
    $("#level-title").text("Level " + level);

    $('.btn').click(function(){
        console.log(this.id)
        var clickedCol = this.id;
        clickAnimation(clickedCol);
        
        playSound(clickedCol);
        if(this.id == colorOrder[counter]){
            counter++;
           
            
            if(counter == colorOrder.length){
                //alert('correct')
                level++;
                $("#level-title").text("Level " + level);
                var generatedColor = addColor()
                colorOrder.push(generatedColor);
                console.log(generatedColor);
                
                setTimeout(function(){
                    playSound(generatedColor);
                    clickAnimation(generatedColor);
                }, 1000)
                
                counter = 0;
            }
            
        }
        else{
            counter = 0;
            
            //colorOrder =[];
            $("body").addClass("game-over");
            setTimeout(function(){
            
                $("body").removeClass("game-over")
               
            }, 100);
            $("#level-title").text("GAME OVER!");
            
            level = 1;
            playSound('wrong');
            
            //alert("false")
        }




    })


    console.log(colorOrder)

//add to array

//user enters sequence

//validate sequence


}
