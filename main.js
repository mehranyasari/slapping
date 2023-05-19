const countDownDate = new Date("05/25/2023 11:30 AM").getTime();
// Update the count down every 1 second
const x = setInterval(function () {
    // today's date and time
    const now = new Date().getTime();

    // distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML =
        days +
        "day " +
        hours +
        "hours " +
        minutes +
        "minutes " +
        seconds +
        "second ";
    //  count down is finished, write something
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "NOWWWWWWWW!";
    }
}, 1000);
