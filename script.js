typeWriter();
navBarLinks();

//###############################################################################################################

function navBarLinks() {
    let navBarLinks = document.querySelectorAll(".nav-bar a");
    navBarLinks[0].style.color = "#FFB400";
    navBarLinks.forEach((ele)=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({});

        });
    });
    let arrayOfSections = [document.querySelector("#Main"),
                        document.querySelector("#About"),
                        document.querySelector("#Services"),
                        document.querySelector("#Portfolio"),
                        document.querySelector("#Contact")
                    ];  
    let started = false;        
    window.onscroll = ()=>{
        arrayOfSections.forEach((ele)=>{
            if ((window.scrollY + 250) >= ele.offsetTop && window.scrollY < (ele.offsetTop+ele.offsetHeight) ) {
                if (ele.id == "Services") {
                    if (window.scrollY >= ele.offsetTop+80) {
                        
                        let stat = document.querySelectorAll(".stat h2");
                        if(!started) {
                            stat.forEach((elem) => {
                                let goal = elem.dataset.goal;
                                let count = setInterval(() => {
                                    elem.textContent++;
                                    if (elem.innerHTML == goal) {
                                        clearInterval(count);	
                                    }
                                },800/goal);
                            });
                        }
                    started = true;
                    }
                }
                navBarLinks.forEach((elem)=>{
                    elem.style.color = "#FFF";
                    if (elem.dataset.section == `#${ele.id}`) {
                        elem.style.color = "#FFB400";
                    }
                });
            }
        });      
    }
}

//###############################################################################################################

function typeWriter() {
    let myTexts = ["a Writer","a Web Developer","a freelancer"];
    let i = 0;
    let j =0;
    let interval1 = setInterval(()=>{
        document.querySelector(".type-writer-effect").textContent += myTexts[j][i];
        i++;
        if (i == myTexts[j].length) {
            clearInterval(interval1);
        }
    },100);
    setTimeout(()=>{
        i--;
        let interval2 = setInterval(() => {
            document.querySelector(".type-writer-effect").innerHTML = myTexts[j].slice(0,i);
            i--;
                if (i == -1) {
                    i++;
                    clearInterval(interval2);
                }
            },100);
    },2000);
    j++;
setInterval(()=>{
    let interval1 = setInterval(()=>{
        document.querySelector(".type-writer-effect").textContent += myTexts[j][i];
        i++;
        if (i == myTexts[j].length) {
            clearInterval(interval1);
        }
    },100);
    setTimeout(()=>{
        i--;
        let interval2 = setInterval(() => {
            document.querySelector(".type-writer-effect").innerHTML = myTexts[j].slice(0,i);
            i--;
                if (i == -1) {
                    i++;
                    clearInterval(interval2);
                }
            },100)
    },2000);
    j++;
    if (j == myTexts.length) {
        j = 0;
    }
},4000);


}

//###############################################################################################################
