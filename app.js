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
    var currentBatch = findItemByIndex(index);
    oven.batches.push(currentBatch);
    console.log(('Food in the oven'));
  },
  lastItem: function() {
    return this.tray.length-1
  },
  findItemByIndex: function(index) {
    return this.tray.splice(index,1)[0]
  }
};

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
  formSelector   : "#new_batch",
  listSelector   : "#prep_batches",
  batchTypeField : "input[name='batch_type']",
  batchTimeField : "input[name='bake_time']",
  clearFormFields: function() {
    $(this.batchTypeField).val("")
    $(this.batchTimeField).val("")
  },
  init: function() {
    $(this.formSelector).on("submit", function(event){
      event.preventDefault();
      var cookie = new Cookie($(prepTableView.batchTypeField).val(),$(prepTableView.batchTimeField).val())
      prepTable.makeBatch(cookie);
      prepTableView.clearFormFields();
      $(prepTableView.listSelector).append(prepTableView.render(prepTable.tray[prepTable.lastItem()]));
    });
  },
  render: function(item) {
    return ["<li>" + item.type + "<form class='prep_tray_item' name='prep_tray_item' data-type=" + item.type + " data-time=" + item.time + "><input type='submit' value='Add to Oven'<form></li>"]
  }
};

var ovenView = {
  formSelector : ".prep_tray_item",
  init: function(){
    console.log($(this.formSelector));
    $('body').on("submit", this.formSelector, function(event){
      event.preventDefault();
      var type = $(this).data("type")
      var time = $(this).data("time")
      console.log(type);
      console.log(time);

    });
  },
  render: function(item) {
    return ["<li>" + item.type + "<form data-time=" + item.time + "><input type='submit' value='Add to Oven'<form></li>"]
  }
};

$(document).ready(function(){
  prepTableView.init();
  ovenView.init();
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

