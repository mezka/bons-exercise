function fillIndexesWith(fillObj, targetArray, indexesArr) {

    indexesArr.forEach((index) => {
        targetArray[index] = fillObj;
    });
};

function scheduleDateToBlock(dateObj) {

    var blockSum = dateObj.getHours() * 3 + Math.floor(dateObj.getMinutes() / 20);

    if (dateObj.getMinutes() % 20) {
        return [blockSum, blockSum + 1];
    } else {
        return [blockSum];
    }
}

class Scheduler {

    constructor() {
        this.usedBlocks = [];
    }


    // returns true if there’s room to schedule at ‘time’
    couldScheduleAt(dateObj) {
        var candidates = scheduleDateToBlock(dateObj);
        
        
        return !this.usedBlocks.find((currentElement) => {
                return currentElement === candidates[0];
            }) && !this.usedBlocks.find((currentElement) => {
                return currentElement === candidates[candidates.length % 1];
            })
        
    }

    // returns true if we successfully scheduled
    scheduleAt(dateObj) {
        let indexesArr = scheduleDateToBlock(dateObj);

        if (this.couldScheduleAt(dateObj)) {
            fillIndexesWith(dateObj, this.usedBlocks, indexesArr);
            return true;
        } else {
            return false;
        }
    }

    // Choose an available time to schedule at, and return that time
    schedule(){

        let date = new Date();
        let index = 0;

        do{
            index = this.usedBlocks.findIndex((current) => { return !current; });
            date.setHours(index / 3);
            date.setMinutes(index % 3);
        }while(this.usedBlocks[index + 1]);

        return date;
    }

    // returns true if we successfully unscheduled something
    unscheduleAt(dateObj){

        let out = false;

        this.usedBlocks.forEach((current) => {
            if(dateObj === current){
                current = null;
                out = true;
            }
        });

        return out;
    }
}

var date = new Date();
var scheduler = new Scheduler();


console.log(scheduleDateToBlock(date));
console.log(scheduler.couldScheduleAt(date));
console.log(scheduler.scheduleAt(date));
console.log(scheduler.scheduleAt(scheduler.schedule()));

console.log(scheduler.usedBlocks);
