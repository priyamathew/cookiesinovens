function Cookie(type, time){
  this.type = type,
  this.time = time,
  this.timeInOven = 0,
  this.status = "raw"
};

var prepTable = {
  tray: [],
  makeBatch: function(item) {
    this.tray.push(item)
  },
  addToOven: function(oven, index) {
    var currentBatch = this.tray.splice(index,1)[0]
    oven.batches.push(currentBatch);
    console.log(('Food in the oven'));
  },
  lastItem: function() {
    return this.tray.length-1
  }
};
console.log(prepTable.tray.length-1);
console.log(prepTable.lastItem());

var oven = {
  batches: [],

  bakeItems: function(batch) {
    batch.timeInOven += 1;
    if (batch.timeInOven < batch.time) {
      batch.status = "still raw";
    } else if (batch.timeInOven === batch.time) {
      batch.status = "just right";
    } else {
      batch.status = "crispy";
    }
  },
  bakeBatch: function() {
    for (var i=0; i < this.batches.length; i++) {
      this.bakeItems(this.batches[i]);
    }
  }
};

var prepTableView = {
  init: function() {
    $('#new_batch').on("submit", function(event){
      event.preventDefault();
      var itemType = $("input[name='batch_type']")
      var bakeTime = $("input[name='bake_time']")
      var cookie = new Cookie(itemType.val(),bakeTime.val())
      bakeTime.val("");
      itemType.val("");
      prepTable.makeBatch(cookie);
      $("#prep_batches").append(prepView.render(prepTable.tray[prepTable.lastItem()]));
    });
  },
  render: function(item) {
    return ["<li>" + item.type + "<form><input type='submit' value='Add to Oven'<form></li>"]
  }
};

$(document).ready(function(){
  prepTableView.init();
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

