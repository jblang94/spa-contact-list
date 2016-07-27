$(function() {
  $('.add-contact').on('submit', function(event) {
    event.preventDefault();
    addContactForm = $(this);

    $.ajax({
      method: addContactForm.attr('method'),
      url: addContactForm.attr('action'),
      data: addContactForm.serialize(),
      success: function(data) {
        contactEntry = $('<tr></tr>').addClass('contact');
        contactEntry.attr('data-id', data.id);
        contactEntry.attr('data-name', data.name);
        contactEntry.attr('data-email', data.email);
        $('<td></td>').text(data.id).appendTo(contactEntry);
        $('<td></td>').text(data.name).appendTo(contactEntry);
        $('<td></td>').text(data.email).appendTo(contactEntry);
        contactEntry.appendTo('tbody');
      }
    });
  });

});
