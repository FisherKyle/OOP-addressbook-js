//business
function Contact(first, last) {
  this.nameFirst = first;
  this.nameLast = last;
}

//user
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userNameFirst = $("input#new-name-first").val();
    var userNameLast = $("input#new-name-last").val();

    var newContact = new Contact(userNameFirst, userNameLast);

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.nameFirst + "</span></li>");

    $("input#new-name-first").val("");
    $("input#new-name-last").val("");

    console.log(newContact.nameFirst);

  });
});
