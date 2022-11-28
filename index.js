//  Timer for clock

// I will use the session storage as a practice only, it is not a standerd approach, it real project we will set the time based on database info or API.

        let daysEle = document.getElementById("daysNum");
        let hoursEle = document.getElementById("hoursNum");        
        let minutesEle = document.getElementById("minutesNum");
        let secondsEle = document.getElementById("secondsNum");

let countDownDate = new Date("Dec 26, 2024 20:40:50").getTime();
let dateDiff;
   if (sessionStorage.getItem("date")) {
     //   console.log('ok, number found')
     countDownDate = sessionStorage.getItem("date");
   } else {
     countDownDate = 432580000;
     sessionStorage.setItem("date", countDownDate);
}
let dateNow1 = new Date().getTime();
   let counter = setInterval(() => {
       try {
           
           let dateNow = new Date().getTime();
    // diff between Now and end day
    
    
           dateDiff = +dateNow1 - (+dateNow - countDownDate);
           
           sessionStorage.setItem("date",dateDiff)
      
    if (dateDiff > 0) {
      // time units
      let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

      daysEle.textContent = days < 10 ? `0${days}` : days;
     hoursEle.textContent = hours < 10 ? `0${hours}` : hours;
     minutesEle.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsEle.textContent = seconds < 10 ? `0${seconds}` : seconds;
        

        setInterval(() => {
            if (seconds == 0) {
                minutesEle.classList.add('fliped');
                setTimeout(() => {
                    minutesEle.classList.remove('fliped');
                }, 1000);
            }
        
        }, 1000);

    } else {
        console.log('time is under 0')
    }
  } catch (e) {
    console.log(`error accr
        reason:
        ${e}`);
    clearInterval(counter);
  }
}, 1000);


let now = new Date().getTime();
console.log(now)