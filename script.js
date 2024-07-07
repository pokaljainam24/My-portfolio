// Add event listener to the submit button
$('.submit-button').on('click', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  var formData = {
    name: $('.fname').val(),
    email: $('.email').val(),
    message: $('textarea[name="message"]').val()
  };

  // Validate the form data
  if (formData.name === '' || formData.email === '' || formData.message === '') {
    alert('Please fill in all the fields!');
    return;
  }

  // Create a new form element
  var form = $('<form>').attr('method', 'post').attr('action', 'contact.php'); // Replace with your server-side script

  // Add the form data to the form
  form.append($('<input>').attr('type', 'hidden').attr('name', 'name').val(formData.name));
  form.append($('<input>').attr('type', 'hidden').attr('name', 'email').val(formData.email));
  form.append($('<input>').attr('type', 'hidden').attr('name', 'message').val(formData.message));

  // Submit the form
  form.submit();
});


init_pointer({
  pointerColor: "#23FF00",
  ringSize: 28,
  ringClickSize: 20
});