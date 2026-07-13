// ================= SECTION SWITCHING =================


function showSection(sectionId){


    let sections = document.querySelectorAll(".section");


    sections.forEach(section => {

        section.classList.remove("active");

    });



    document.getElementById(sectionId)
    .classList.add("active");



    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}



// ================= REGISTRATION VALIDATION =================


document
.getElementById("registrationForm")
.addEventListener("submit",function(event){


    event.preventDefault();



    let name =
    document.getElementById("name").value.trim();


    let email =
    document.getElementById("email").value.trim();


    let college =
    document.getElementById("college").value.trim();


    let eventName =
    document.getElementById("event").value;




    if(name=="" ||
       email=="" ||
       college=="" ||
       eventName=="Select Event"){


        alert(
        "⚠ Please fill all registration details!"
        );


        return;

    }




    alert(

    "🎉 Registration Successful!\n\n"+
    "Welcome to Quantum University Symposium 2026"

    );



    document
    .getElementById("registrationForm")
    .reset();


});





// ================= NAVBAR ACTIVE EFFECT =================


let navLinks =
document.querySelectorAll(".nav-links a");



navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.forEach(item=>{

            item.style.color="white";

        });



        link.style.color="#ffd700";


    });


});






// ================= CARD ANIMATION =================



window.addEventListener("load",()=>{


    let cards =
    document.querySelectorAll(".event-card");



    cards.forEach((card,index)=>{


        card.style.opacity="0";

        card.style.transform="translateY(50px)";



        setTimeout(()=>{


            card.style.transition=".8s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";



        },index*200);



    });



});