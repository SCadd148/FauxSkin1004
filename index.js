

    function oneThing(){
        alert("You've added Centella Ampoule to Bag!");
    }

    function twoThing(){
        alert("You've added Centella Light Cleansing Oil to Bag!");
    }

    function threeThing(){
        alert("You've added Centella Ampoule Foam to Bag!");
    }

    function fourThing(){
        alert("You've added Centella Soothing Cream to Bag!");
    }

    function beautiful(){
        alert("Where shall we go today?");
    }

    function bootleg(){
        alert("Please note that while all products listed below are real, this site is not. :) Please enjoy!!");
    }


    let rate5Button = document.getElementById("rate5Btn");
    rate5Button.addEventListener("click", function() {
        updateRating(5);
    });
         
    let rate4Button = document.getElementById("rate4Btn");
    rate4Button.addEventListener("click", function() {
       updateRating(4);
    });

    let rate3Button = document.getElementById("rate3Btn");
    rate3Button.addEventListener("click", function() {
       updateRating(3);
    });

    let rate2Button = document.getElementById("rate2Btn");
    rate2Button.addEventListener("click", function() {
        updateRating(2);
    });
         
    let rate1Button = document.getElementById("rate1Btn");
    rate1Button.addEventListener("click", function() {
        updateRating(1);
    });

    function updateRating(newRating) {    
        let star1 = document.getElementById("rating1");
        let star2 = document.getElementById("rating2");
        let star3 = document.getElementById("rating3");
        let star4 = document.getElementById("rating4");
        let star5 = document.getElementById("rating5");
  
        star1.style.color = "gold";
        star2.style.color = "gold";
        star3.style.color = "gold";
        star4.style.color = "gold";
        star5.style.color = "gold";
        
        if (newRating == 4) {
           star5.style.color = "lightgray";
        }
        else if (newRating == 3) {
           star5.style.color = "lightgray";
           star4.style.color = "lightgray";
        }
        else if (newRating == 2) {
           star5.style.color = "lightgray";
           star4.style.color = "lightgray";
           star3.style.color = "lightgray";
        }
        else if (newRating == 1) {
           star5.style.color = "lightgray";
           star4.style.color = "lightgray";
           star3.style.color = "lightgray";
           star2.style.color = "lightgray";               
        }
     }


    let lightsOn = false;

    function toggle() {
        lightsOn = !lightsOn;

        const body = document.getElementById("menuHeader");
    
        if (lightsOn) {
            body.classList.remove("bg-responsive-color");
            body.classList.remove("black");
            body.classList.add("bg-dark");
            body.classList.add("white");

        } else {
            body.classList.add("bg-responsive-color");
            body.classList.add("black");
            body.classList.remove("bg-dark");
            body.classList.remove("white");
        }

        const h1 = document.getElementById("h1");
        if (lightsOn) {
            h1.classList.remove("black");
            h1.classList.add("off-white");
        } else {
            h1.classList.add("black");
            h1.classList.remove("off-white");

        }
    }

    function hello() {
        let name = prompt("What is your name shopper?");
        alert("Hello, " + name + "! Thank you for shopping with SKIN1004!");
    }
