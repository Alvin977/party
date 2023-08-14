// navopener

$("#navOpener").click(function () {
    $("#navOpener").css({ transform: "translateX(250px)" })
    $("nav").css({ left: "0" })
})

/********/ 
//navcloser 

$(".closeBtn").click(() => {
    $("#navOpener").css({ transform: "translateX(0)" })
    $("nav").css({ left: "-250px" })
})

/********/ 
// navlinks controller

$("nav ul li").click(function () {

    let link = $(this).find("a")
    let href = $(link).attr("href")
    let sectionTop = $(href).offset().top
    $("html,body").animate({ scrollTop: sectionTop }, { duration: 2000, queue: false })
})

/************/ 

//singerssliders

$(".slider").click(function () {
    $(this).next().slideToggle(500)
    $(".slider").not(this).next().slideUp(500)
})
/********/ 

let timeObj = {}

// timer for event at (25-10) (1pm)

function getTime() {
    
    let date = new Date()
    let month = date.getMonth() + 1
    let day = 0
    let hour = 0
    let minute = 0
    let second = 0
    let monthD = 0
    let monthArr = [0]
    // month:10
    let arrLength = 10 - month
    /**/ 
    if (arrLength >= 0) {
        for (let i = 0; i < arrLength; i++) {
            if (monthArr != [0]) {
                monthArr.push(month + i)
            }
        }
        monthArr.forEach((el) => {
            if (el == 1 || el == 3 || el == 5 || el == 7 || el == 8 || el == 10 || el == 12) {
                monthD += 31
            }
            else if (el == 2) {
                monthD += 28
            }
            else if (el == 0) {
                monthD = 0
            }
            else {
                monthD += 30
            }
        })
        // day:25
        day = (monthD + 25) - date.getDate()
        /**/ 
        // hour:1pm
        hour = 13 - date.getHours()
        /**/ 
        minute = 60 - date.getMinutes()
        second = 60 - date.getSeconds()
        timeObj = {
            oday: day,
            ohour: hour,
            ominute: minute,
            osecond: second,
        }


    }
    else {
        timeObj = {
            oday: 0,
            ohour: 0,
            ominute: 0,
            osecond: 0,
        }
    }
}
getTime()

function showTime() {
    if (timeObj.osecond == 60) {
        timeObj.osecond == 0
    }
    else if (timeObj.osecond < 0) {
        timeObj.ominute--
        timeObj.osecond = 59

    }

    if (timeObj.ominute == 60) {
        timeObj.ominute == 0
    }

    else if (timeObj.ominute < 0) {
        timeObj.ohour--
        timeObj.ominute = 59

    }

    if (timeObj.ohour < 1) {
        if (timeObj.oday == 0) {
            timeObj.ohour = 0
            timeObj.ominute = 0
            timeObj.osecond = 0
        }
        else {
            timeObj.oday--
            timeObj.ohour += 24
        }
    }


    if (timeObj.oday < 0) {
        timeObj.oday = 0
        timeObj.ohour = 0
        timeObj.ominute = 0
        timeObj.osecond = 0
    }

    $(".day").html(`${timeObj.oday}`)
    $(".hour").html(`${timeObj.ohour}`)
    $(".minute").html(`${timeObj.ominute}`)
    $(".second").html(`${timeObj.osecond}`)
}


showTime()
let x = setInterval(() => {
    if (timeObj.oday == 0 && timeObj.ohour == 0 && timeObj.ominute == 0 && timeObj.osecond == 0) {
        clearInterval(x)
    }
    else {
        timeObj.osecond--
        showTime()
    }

}, 1000);

/*******************/ 

// counter for writing in the textarea
let counter = 100
$("#textArea").keydown(function (e) {
    console.log(e.key);
    if (e.key == "Backspace") {
        if (counter != 100) {
            counter++
        }
    }
    else {
        counter--
    }
    if (counter > 0) {
        $(".counter").html(`${counter}`)
    }
    else {
        $(".counter").html(`your available character finished`)
    }
})