function Cookie(type, time){
  this.type = type,
  this.time = time,
  this.timeInOven = 0,
  this.status = "raw",
  this.id = new Date().getTime()
};

var prepTable = {
  tray: [],
  addItem: function(item) {
    this.tray.push(item)
  },
  removeItem: function(index) {
    return this.tray.splice(index,1)[0]
  },
  findItem: function(id) {
    var result = null;
    $(this.tray).each(function(i,item){
      if (item.id == id){
        result = item;
        return false;
      }
    });
    return result;
  }
};

var oven = {
  batches: [],

  addItem: function(item) {
    if (oven.batches.length < 3){
      this.batches.push(item);
      alert('Food in the oven');
    } else {
      alert('No room in the oven!');
    }
  },
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
  },
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
      prepTable.addItem(cookie);
      prepTableView.clearFormFields();
      $(prepTableView.listSelector).append(prepTableView.render(cookie));
    });
  },
  render: function(item) {
    return ["<li>" + item.type + "<form class='prep_tray_item' id=" + item.id + " name='prep_tray_item' data-id=" + item.id + " ><input type='submit' value='Add to Oven'<form></li>"]
  }
};

var ovenView = {
  formSelector : ".prep_tray_item",
  // elementSelector: "rack_0",
  init: function(){
    $('body').on("submit", this.formSelector, function(event){
      event.preventDefault();
      var id = $(this).data("id");
      var item = prepTable.findItem(id);
      oven.addItem(item);
      $("#" + item.id).parent().remove();
      var rackNumber = (oven.batches.length-1).toString();
      console.log($("#rack_" + rackNumber.toString()));
      $("#rack_" + rackNumber).replaceWith(ovenView.render(item));
      prepTable.removeItem(item);
    });
  },
  render: function(item) {
    return "<td id=rack_" + (oven.batches.length-1).toString() + ">" + item.type + " [" + item.status + "]</td>"
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

