//business
function Contact(first, last, city, state) {
  this.nameFirst = first;
  this.nameLast = last;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.nameFirst + " " + this.nameLast;
}

Contact.prototype.address = function() {
  return this.city + ", " + this.state;
}

//user
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userNameFirst = $("input#new-name-first").val();
    var userNameLast = $("input#new-name-last").val();
    var userAddressCity = $("input#new-address-city").val();
    var userAddressState = $("input#new-address-state").val();

    var newContact = new Contact(userNameFirst, userNameLast, userAddressCity, userAddressState);

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.nameFirst);
      $(".first-name").text(newContact.nameFirst);
      $(".last-name").text(newContact.nameLast);
      $(".address").text(newContact.address());
    });

    $("input#new-name-first").val("");
    $("input#new-name-last").val("");
    $("input#new-address-city").val("");
    $("input#new-address-state").val("");

  });
});
