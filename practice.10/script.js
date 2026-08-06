
// Time Converter:-

// minutes -> h/60
// second-> h s /60*60 - s/3600

let second = 3665;
let minutes = Math.floor((second%3600)/60);
let hours = Math.floor(second/3600);
second = (second % 3600) % 60;
console.log(hours + ":"+ minutes + ":"+ second);

