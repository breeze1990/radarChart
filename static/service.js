myApp.service('service', function ($interval) {
  /// Gets the restaurants based on keywords.
  this.getRestaurantsBasedOnKeywords = function (keywords) {
    return 'sampleString';
  };

  /// Example of private method.
  this.calculateElapsedTime = function () {
    /// 2015.1.25 10pm ET
    var initialMs= (new Date(2015, 0, 25, 19, 0, 0)).getTime();
    var elapsedTime = {years: 0, days: 0, hours: 0, minutes: 0, seconds: 0, showTime: false};
    $interval(function() {
        var totalMilliseconds = (new Date()).getTime() - initialMs;
        var num = Math.floor(totalMilliseconds / 1000);
        // var duration = moment.duration(totalMilliseconds);
        // console.log(duration.years());
        // console.log(duration.months());
        // console.log(duration.weeks());
        elapsedTime.seconds = num % 60;
        num = Math.floor(num / 60);
        elapsedTime.minutes = num % 60;
        num = Math.floor(num / 60);
        elapsedTime.hours = num % 24;
        num = Math.floor(num / 24);
        elapsedTime.days = num % 365;
        elapsedTime.years = Math.floor(num / 365);
        elapsedTime.showTime = true;
    }, 1000);
    return elapsedTime;
  }
})
