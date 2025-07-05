let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#new-btn");
let resetgamebtn = document.querySelector("#reset-btn");

turn0 = true;

let count = 0;

let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 == true){
            box.innerText="O";
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled=true;
        count++;
        checkwinner();
        gamedraw();
    });
});



checkwinner = () =>{
    for(pattern of winpatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                count=0;
                showwinner(pos1val)
            }
        }
    }
}

gamedraw = () =>{
    if(count==9){
        count=0;
        msg.innerText = "Game Was Draw. Try Again."
        msgcontainer.classList.remove("hide");
    }
}

showwinner = (pos1val) =>{
    msg.innerText=`Congratulations Winner is ${pos1val}`;
    msgcontainer.classList.remove("hide");
    disableboxes ();    
}

disableboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

resetgame = () =>{
    turn0=true;
    msgcontainer.classList.add("hide");
    count=0;
    enableboxes();
}

enableboxes = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newgamebtn.addEventListener("click",resetgame);
resetgamebtn.addEventListener("click",resetgame);



