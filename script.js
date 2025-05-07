 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create form data object
    const formData = {
      name,
      email,
      message,
    };

    // Send form data to the backend server
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);  // Show success message
      document.getElementById('contactForm').reset();  // Reset form after success
    })
    .catch(error => {
      alert('There was an error sending your message!');
    });
  });
