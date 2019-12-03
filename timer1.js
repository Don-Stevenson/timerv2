let args = process.argv.slice(2);
let nums = [];

for (let item of args) {
  item = Number(item);
  if (item >= 1) {
    nums.push(item);
  }
}

const alarm = (time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('alarm rang', time);
  }, time * 1000);
}


const ringAlarms = (nums) => {
  nums.forEach(alarm);
}

//ringAlarms(nums)

// process.argv.slice(2).map(Number).filter((x) => x >= 1).forEach(alarm)


// let num = [];
// //timer function that uses args on 
// const timer = (args) => {
//     if (args.length === 0) {
//     console.log("please use a proper value for the timer")
//     return;
//   } else {
//      setTimeout(() => {
//      process.stdout.write('alarm rang . \n');
//     }, 1000 * args);
//   }
// }


// for (let letter of args) {
//   letter = Number(letter);
//   if (letter >= 1) {
//     num.push(letter);
//   }
// }

// const ringAlarm = function (args, callback){
//   for(let item of args){
//     timer(item);
//     console.log('!!!!', item);
//   }
// }

// timer(args);
// ringAlarm(args);

// // previous
// let args = process.argv;
// args = args.slice(2);
// let num = [];

// const alarm = function(time){
//   if (time === undefined){
//     return;
//   }
// setTimeout(() => {
//     process.stdout.write('\x07');
//     console.log('alarm rang', time);
//   }, time*1000);
// }

// for (let letter of args){
// letter = Number(letter);
//   if(letter >= 1){
//   num.push(letter); 
//   } 
// }
// // console.log(num);

// const ringAlarm = function (array, callback, stop){
//   for(let item of array){
//     callback(item);
//     // console.log('!!!!', item);
//   }
// }

// ringAlarm(num,alarm)
