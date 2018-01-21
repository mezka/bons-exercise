// a and b are javascript Date objects
function computeDifferenceInMinutes(date1, date2) {
  var diff = Math.abs(date1 - date2);

  var minutes = Math.floor(diff / 1000 / 60);

  return minutes;
}

class Scheduler {
  constructor() {
    this.scheduleArr = [];
  }

  couldScheduleAt(dateObj) {
    if (
      this.scheduleArr.length > 0 &&
      this.scheduleArr.every(
        currentDateObj =>
          computeDifferenceInMinutes(dateObj, currentDateObj) < 20
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  scheduleAt(dateObj) {
    if (this.couldScheduleAt(dateObj)) {
      this.scheduleArr.push(dateObj);
      console.log(this.scheduleArr);
      return true;
    } else {
      return false;
    }
  }

  unscheduleAt(dateObj) {
    var index = this.scheduleArr.findIndex(
      currentDateObj => currentDateObj === dateObj
    );

    if (index !== -1) {
      this.scheduleArr.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  schedule() {
    var candidate = new Date();

    while (!this.couldScheduleAt(candidate)) {
      candidate.setTime(candidate.getTime() + 1000 * 60 * 20);
    }

    if (this.scheduleAt(candidate)) {
      return candidate;
    } else {
      throw "Internal program error, couldn't schedule candidate";
    }
  }
}

module.exports = Scheduler;
