


// function RunAtMidnight(){
//     var now = new Data();
//     var night = new Data(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getData()+1, //the next day
//         0,0,0 // at 00:00:00 hours i.e. midnight
//     );
//     var msToMidnight = night.getTime() - now.getTime();
//     setTimeout(func,
//         reset();
//         RunAtMidnight();
//     }, msToMidnight);
// }

// export default RunAtMidnight;

import schedule from "node-schedule";

schedule.scheduleJob("0 0 * * *", () => {})

var dateNow = new Date();
var millisTillMidnight = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1, 0, 0, 0, 0) - dateNow;
