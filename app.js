function Cookie(type, time){
  this.type = type,
  this.time = time,
  this.timeInOven = 0,
  this.status = "raw"
};

var baker = {
            cookieTray: [],
            makeBatch: function(type, time) {
              type = new Cookie(type,time)
              this.cookieTray.push(type)
            },
            addToOven: function(oven, index) {
              var currentBatch = this.cookieTray.splice(index,1)[0]
              oven.batches.push(currentBatch);
              console.log(('Cookies in the oven'));
            }
};

var oven = {

          batches: [],

           bakeCookie: function(batch) {
            batch.timeInOven += 1;
            if (batch.timeInOven < batch.time)
              {
              batch.status = "still gooey";
              }
             else if (batch.timeInOven === batch.time)
             {
              batch.status = "just right";
             }
             else
             {
              batch.status = "crispy";
             }
           },
          bakeBatch: function() {
            for (var i=0; i < this.batches.length; i++)
            {
              this.bakeCookie(this.batches[i]);
            }
          }
};

$(document).ready(function(){
  $('#new_batch').on("submit", function(event){
    event.preventDefault();
    var cookieType = $("input[name='batch_type']")
    var bakeTime = $("input[name='bake_time']")
    baker.makeBatch(cookieType.val(), bakeTime.val());
    bakeTime.val("");
    cookieType.val("");
    $("#prep_batches").replaceWith("<li>" + baker.cookieTray[0].type + "</li>");

    function cookieTray(cookies) {
      for (var i=0; i < cookies.length; i++)
      {
        ["<li>" + cookies[i].type + "<form><input type=hidden value=" +
        cookies[i].type + "/><input type=hidden value=" + cookie[i].time
        }).appendTo('form') + "</form></li>"]
      }

  })







});


// baker.makeBatch("oatmeal", 4)
// baker.makeBatch("sugar", 2)
// baker.makeBatch("peanutbutter", 6)
// baker.addToOven(oven, 1)
// console.log(oven.batches)
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
// console.log(oven.batches)
// how do we get the type back of a javascript object?

