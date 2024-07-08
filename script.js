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


// script.js
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Define some particle properties
const particles = [];
const numParticles = 100;
const particleSize = 2;
const particleSpeed = 0.5;

// Initialize particles with random positions and velocities
for (let i = 0; i < numParticles; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * particleSpeed,
    vy: (Math.random() - 0.5) * particleSpeed,
  });
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each particle
  for (let i = 0; i < numParticles; i++) {
    const particle = particles[i];

    // Update particle position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Bounce off walls
    if (particle.x < 0 || particle.x > canvas.width) {
      particle.vx = -particle.vx;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.vy = -particle.vy;
    }

    // Draw particle
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particleSize, 0, 2 * Math.PI);
    ctx.fill();
  }
}

animate();