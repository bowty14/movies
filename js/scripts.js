function TicketToBuy (){  
  this.tickets = [];
  this.currentId = 0;
  console.log(TicketToBuy);
}

TicketToBuy.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

function Ticket(age, movieTitle, showTime) {
  this.movieTitle = movieTitle;
  this.showTime = showTime;
  this.age = age;
}

TicketToBuy.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}

TicketToBuy.prototype.findTicket = function (id) {
  for (var i = 0; i < this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        return this.tickets[i];
      }
    }
  };
  return false;
}

Ticket.prototype.price = function() {
  var price = 14;
  if (this.age === "child") {
    price *= .6;
  } else if (this.age === "senior") {
    price *= .8;
  } else {
    price *= 1.2;
  }
  return price;
}

function showTickets(toBuy) {
  content = '';  
  for (var i = 0; i < toBuy.tickets.length; i++) {
    content += showTicket(toBuy.tickets[i]);
  }
  $("#tickets").text(content);
  $("#output").show();
}

function showTicket(ticket) {
  var ticketInfo = ("One " + ticket.age + " ticket for " + ticket.movieTitle + " at " + ticket.showTime + " price " + ticket.price());
  return ticketInfo;
}


$(document).ready(function(){
  var ticketsToBuy = new TicketToBuy();

  $("#form-container").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var inputtedMovie = $("#movie-title").val();
    var inputtedShowTime = $("#show-time").val();
    
    var newTicket = new Ticket(inputtedAge, inputtedMovie, inputtedShowTime);
    ticketsToBuy.addTicket(newTicket);
    console.log(ticketsToBuy);
    showTickets(ticketsToBuy);    
  });
})