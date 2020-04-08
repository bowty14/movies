function TicketToBuy (){  
  this.ticketPrices = [];
  this.currentId = 0;
  console.log(TicketToBuy);
}

TicketToBuy.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.ticketPrices.push(ticket);
}

function TicketPrice(age, movieTitle, showTime, price) {
  this.age = age,
  this.movieTitle = movieTitle
  this.showTime = showTime
  
}

TicketToBuy.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}

TicketToBuy.prototype.findTicket = function (id) {
  for (var i = 0; i < this.ticketPrices.length; i++) {
    if (this.ticketPrices[i]) {
      if (this.ticketPrices[i].id == id) {
        return this.ticketPrices[i];
      }
    }
  };
  return false;
}

TicketPrice.prototype.price = function() {
  var price = 12;
  if (this.age === "child") {
    price *= .05;
  } else if (this.age === "senior") {
    price *= .07;
  } else {
    price *= 1.4;
  }
  return this.price;
}

 var ticketsToBuy = new TicketToBuy();


function showTicket(ticketsToBuy) {
  var ticket = ticketsToBuy.findTicket(ticketsToBuy.currentId);
  $(".movie").text(ticket.movieTitle);
  $(".time").text(ticket.showTime);
  $(".ticket-price").text(ticket.price);
  $("#output").show();
}




$(document).ready(function(){
  
  $("#form-container").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var inputtedMovie = $("#movie-title").val();
    var inputtedShowTime = $("#show-time").val();
    
    
    var newTicket = new TicketPrice (inputtedAge, inputtedMovie, inputtedShowTime);
    ticketsToBuy.addTicket(newTicket);
    // displayTicketDetails(ticketsToBuy);
    // ticketsToBuy.price(inputtedAge);
    // console.log(ticketsToBuy.price(inputtedAge))
    // displayTicketDetails(Ticket);
    console.log(ticketsToBuy);
    showTicket(ticketsToBuy);
    // ticketsToBuy.price(newTicket)
  });
})