//business
function Contact(first, last) {
  this.nameFirst = first;
  this.nameLast = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.nameFirst + " " + this.nameLast;
}

Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state;
}

var resetFields = function() {
  $("input#new-name-first").val("");
  $("input#new-name-last").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
  $(".new-address").not(".primary-addresses").hide();
}

//user
$(document).ready(function() {

  $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address">' +
                                   '<div class="form-group">' +
                                     '<label for="new-street">Street</label>' +
                                     '<input type="text" class="form-control new-street" placeholder="ex. 950 Ivy Drive">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                     '<input type="text" class="form-control new-city" placeholder="ex. New York">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-state">State</label>' +
                                     '<input type="text" class="form-control new-state" placeholder="ex. NY">' +
                                   '</div>' +
                                 '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userNameFirst = $("input#new-name-first").val();
    var userNameLast = $("input#new-name-last").val();
    var newContact = new Contact(userNameFirst, userNameLast);

    $(".new-address").each(function() {
      var userStreet = $(this).find("input.new-street").val();
      var userCity = $(this).find("input.new-city").val();
      var userState = $(this).find("input.new-state").val();
      var newAddress = new Address(userStreet, userCity, userState);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.nameFirst);
      $(".first-name").text(newContact.nameFirst);
      $(".last-name").text(newContact.nameLast);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      })
    });

    resetFields();

  });
});
