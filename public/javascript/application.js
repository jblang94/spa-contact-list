$(function() {

  function attachOptions(contactEntry) {
    var options = $('<td></td>');
    var showBtn = $('<button></button>').text('Show').addClass('button').addClass('show');
    var deleteLink = $('<a></a>').attr('href', '/contacts/' + contactEntry.data('id') + '/delete').text('Delete').addClass('button').addClass('delete');
    showBtn.appendTo(options);
    deleteLink.appendTo(options);
    options.appendTo(contactEntry);
  }

  $('.add-contact').on('submit', function(event) {
    event.preventDefault();
    var addContactForm = $(this);
    $.ajax({
      method: addContactForm.attr('method'),
      url: addContactForm.attr('action'),
      data: addContactForm.serialize(),
      success: function(data) {
        contactEntry = $('<tr></tr>').addClass('contact');
        contactEntry.attr('data-id', data.id).attr('data-name', data.name).attr('data-email', data.email);
        $('<td></td>').text(data.name).appendTo(contactEntry);
        attachOptions(contactEntry);
        contactEntry.appendTo('.contacts-table');
        $('.new-contact-name').val("");
        $('.new-contact-email').val(""); 
      }
    });
  });

  $('.contacts-table').on('click', '.show', function() {
    showContact = $('.show-contact');
    showContact.empty();
    contact = $(this).closest('.contact');

    $('<p></p>').text("CONTACT ID: " + contact.data('id')).appendTo(showContact);
    $('<p></p>').text("CONTACT NAME: " + contact.data('name')).appendTo(showContact);
    $('<p></p>').text("CONTACT EMAIL: " + contact.data('email')).appendTo(showContact);
  });

  $('.contacts-table').on('click', '.delete', function(event) {
    event.preventDefault();
    var contact = $(this).closest('.contact');
    var contactId = contact.data('id');
    var deleteUrl = '/contacts/' + contactId + '/delete';
    $.ajax({
      method: 'GET',
      url: deleteUrl,
      success: function() {
        contact.remove();
        alert("Deleted contact " + contactId);
      }
    });
  });

});