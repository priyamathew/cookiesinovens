$(this.formSelector).submit(function(e) {
  e.preventDefault();

  var bakeTime = $(that.bakeTimeSelector).val(),
      cookieType = $(that.cookieType)
})



$.("PrepTable:addingItem").subscribe(function(cookie){
  that.renderCookie(cookie);
});


//using subscribe through pubsub

// //prototyping vs construction
// best practice: use prototypes
// prototypes uses less memory then constructor
PrepTable.prototype.someMethod = function(){}

PrepTable.prototype = {

}
// line 22 will overwrite the method added on line 20
var FooBar = function() {}



