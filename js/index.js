const countDownDate = new Date("Apr 25, 2021 18:00:00").getTime();

const num = setInterval(function() {
    const now = new Date().getTime();
    let distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " д " + hours + " г " + minutes + " хв " + seconds + " сек ";

    if (distance < 0) {
        clearInterval(num);
        document.getElementById("countdown").innerHTML = "Івент нажаль пройшов";
    }
}, 1000);
