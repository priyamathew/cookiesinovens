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
  addItem: function(iemt){
    this.attributes.items.push(item);
    $.Topic("PrepTable:addingItem").publish(item);
  //using publish through pubsub 
  }
}
// while the technique used in line 22 allows
// us to qucikly define multiple prototypes methods
// it also overwrites all previously defined
//prototype methods, including built in functions
//thus line 22 will overwrite the method added on line 20
//thus it is best practice to set each prototype method
//using PrepTable.prototype.someMethod = functin(){}


