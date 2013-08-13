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
              oven.batches.push(this.cookieTray.splice(index,1))
              alert('Cookies in the oven')
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

// var snickerdoodle = new Cookie("snickerdoodle", 5)
// // console.log("Cookie type is " + cookie.type + " and time is " + cookie.time)
// // var oatmeal = new Cookie("oatmeal", 3)
// var sugar = new Cookie("sugar", 2)
// oven.batches = [ snickerdoodle]
// oven.batches.push(sugar)
baker.makeBatch("oatmeal", 4)
// baker.addToOven(oven)
baker.makeBatch("sugar", 2)
// baker.addToOven(oven)
baker.makeBatch("peanutbutter", 6)
console.log(baker.cookieTray[0])
baker.addToOven(oven, 1)

// console.log(baker.cookieTray)
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
// oven.bakeBatch()
console.log(oven.batches)

