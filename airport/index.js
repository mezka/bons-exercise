var freeBlocks = [];

var usedBlocks = [];

function initializeFreeBlocks(freeBlocksArray){
  for(var i = 0; i < 72; i++)
    freeBlockArray.push(i);
}

function scheduleDateToBlock(dateObj){
    
    var blockSum = dateObj.getHours() * 3 + Math.floor(dateObj.getMinutes() / 20) + 1;
    
    if(dateObj.getMinutes() % 20){
      return [blockSum, blockSum + 1];
    } else {
      return [blockSum];  
    }   
}

class Scheduler {
 // returns true if there’s room to schedule at ‘time’
  couldScheduleAt(dateObj){
  var candidates = scheduleDateToBlock(dateObj);
  
  candidates.reduce((accumulator, current) => {
      accumulator && freeBlocks.find(currentElement => {
          return currentElement === current;
      })
  })
 }

 // returns true if we successfully scheduled
 ScheduleAt(dateObj){
    if(couldScheduleAt(dateObj)){
        
    }
 }

 // Choose an available time to schedule at, and return that time
 Schedule();

 // returns true if we successfully unscheduled something
 UnscheduleAt(Date time);
}

var d = new Date();


console.log(scheduleDateToBlock(d));