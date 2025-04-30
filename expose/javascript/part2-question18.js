function meow() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(meow, 1000);