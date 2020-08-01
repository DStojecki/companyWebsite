window.addEventListener('scroll', function () {



    let windowHeight = window.innerHeight
    let scrollValue = window.scrollY
    //console.log(scrollValue)

    let person1 = document.querySelector("section div.person:nth-child(1)")
    let person1FromTop = person1.offsetTop
    let personHeight = person1.offsetHeight

    let person2 = document.querySelector("section div.person:nth-child(2)")
    let person2FromTop = person2.offsetTop

    let person3 = document.querySelector("section div.person:nth-child(3)")
    let person3FromTop = person3.offsetTop

    if (scrollValue >= person1FromTop + personHeight - windowHeight) {
        person1.classList.add("active")
    }

    if (scrollValue >= person2FromTop + personHeight - windowHeight) {
        person2.classList.add("active")
    }

    if (scrollValue >= person3FromTop + personHeight - windowHeight) {
        person3.classList.add("active")
    }

    if (scrollValue < 100) {

        let activePersons = this.document.querySelectorAll('section div.person');
        for (let i = 0; i < activePersons.length; i++) {
            activePersons[i].classList.remove('active')
        }
    }
})

let activePersons = this.document.querySelectorAll('section div.person');

let buttonUs = document.querySelector("ul li:nth-child(1)");

buttonUs.addEventListener("click", function () {

    let sectionUs = document.querySelector("section.us");
    sectionUs.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });

})

let buttonGaleria = document.querySelector("ul li:nth-child(2)");

buttonGaleria.addEventListener("click", function () {

    let sectionGaleria = document.querySelector("section.galeria");
    sectionGaleria.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });

})