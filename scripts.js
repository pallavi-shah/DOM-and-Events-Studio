// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    let var_takeOff=document.getElementById("takeoff");
    let var_land=document.getElementById("landing");
    let var_abortMission=document.getElementById("missionAbort");
    let var_leftButton=document.getElementById("left_button");
    let var_rightButton=document.getElementById("right_button");
    let var_upButton=document.getElementById("up_button");
    let var_downButton=document.getElementById("down_button");

    function clickTakeOff(){
        result=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML="Shuttle in flight.";
            shuttleBackground.style.backgroundColor="blue";
            let var_spaceShuttleHeight=Number(document.getElementById("spaceShuttleHeight").innerHTML);
            let new_height=var_spaceShuttleHeight+10000;
            spaceShuttleHeight.innerHTML= new_height;
            console.log("Shuttle in Flight")
        }
    }

    function clickLand(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML=0;
    }

    function clickMissionAbort(){
       result=window.confirm("Confirm that you want to abort the mission.");  
       if(result){
           flightStatus.innerHTML="Mission aborted."
           shuttleBackground.style.backgroundColor="green";
           document.getElementById("spaceShuttleHeight").innerHTML=0;
       }
    }
    
    function clickLeftButton(){
         document.getElementById("rocket").style.marginLeft+="-10px"
    }

    function clickRightButton(){
        document.getElementById("rocket").style.marginRight+="-10px"
   }

    function clickUpButton(){
        let var_height=Number(document.getElementById("spaceShuttleHeight").innerHTML)
        let new_height=var_height+10000;
        document.getElementById("spaceShuttleHeight").innerHTML=new_height;
    }

    function clickDownButton(){
        let var_height=Number(document.getElementById("spaceShuttleHeight").innerHTML)
        if (var_height===0){
            document.getElementById("spaceShuttleHeight").innerHTML=0;
        }else
            {
            let new_height=var_height-10000;
            document.getElementById("spaceShuttleHeight").innerHTML=new_height;
        }
   }

    var_takeOff.addEventListener("click", clickTakeOff);
    var_land.addEventListener("click",clickLand);
    var_abortMission.addEventListener("click",clickMissionAbort);
    var_leftButton.addEventListener("click",clickLeftButton);
    var_rightButton.addEventListener("click",clickRightButton);
    var_upButton.addEventListener("click",clickUpButton);
    var_downButton.addEventListener("click",clickDownButton);
}
window.onload = init;