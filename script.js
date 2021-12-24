

function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am_pm =document.getElementById("am-img"); 

    var time = new Date();
    var hour = time.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    am_pm.innerHTML = ampm;
    hour = hour%12;
    hour = hour ? hour:12;
    if(hour<10){
        hour = "0"+hour;
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute = "0"+minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second = "0" + second;
    }
    seconds.innerHTML = second;
    
}

setInterval(clock,1000);

function makeDiv() {
    var container = document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";
    document.getElementById("grid-container").appendChild(container);

    var invalue = document.getElementById("wakeuptimeselector");
    var invalue1 = document.getElementById("lunchtimeselector");
    var invalue2 = document.getElementById("naptimeselector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="wakeup Time is set to "+ value+"<br/> Lunch Time is set to "+ invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time is set to "+ invalue2.options[invalue2.selectedIndex].text;
    }


function settimefunc() {
    var a = document.getElementById("wakeuptimeselector").value;
    var b = document.getElementById("lunchtimeselector").value;
    var c = document.getElementById("naptimeselector").value;
    var hourr = new Date().getHours();
    if(a==hourr){
        document.getElementById("right-container-box").style.backgroundImage="url(assests/wakeup_image.svg)";
        document.getElementById("right-container-text-area").innerHTML="Breakfast Time!"
        div_var1 =1;
    }
    else if(b==hourr){
        document.getElementById("right-container-box").style.backgroundImage="url(assests/lunch_image.svg)";
        document.getElementById("right-container-text-area").innerHTML="Lunch Time!"
        div_var2 =1;
    }
    else if(c==hourr){
        document.getElementById("right-container-box").style.backgroundImage="url(assests/goodnight_image.svg)";
        document.getElementById("right-container-text-area").innerHTML="Nap Time!"
        div_var3 = 1;
    }
    makeDiv();
}