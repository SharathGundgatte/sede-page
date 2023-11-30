function submitForm() {
    // Client-side validation (you can add more validation as needed)
    var form = document.getElementById('registrationForm');
    if (!form.checkValidity()) {
        alert('Please fill in all required fields.');
        return;
    }

    // Collect form data
    var formData = new FormData(form);

    // Make an AJAX request to the server
    $.ajax({
        type: 'POST',
        url: 'register',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            var result = JSON.parse(response);
            if (result.success) {
                alert(result.message);
                // You can redirect or perform other actions upon successful registration
            } else {
                alert(result.message);
            }
        },
        error: function () {
            alert('Error submitting the form.');
        }
    });
}
