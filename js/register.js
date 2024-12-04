// Handle Register Logic
async function handleRegister(userData) {
    try {
      console.log('User Data Received:', userData); // Confirm data capture in console
  
      // Replace with your actual backend API URL
      const response = await fetch('https://ebook-snowy-two.vercel.app/api/conversion/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert('Registration failed: ' + errorData.errors || 'Unknown error');
        return;
      }
  
      const data = await response.json();
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html'; // Redirect to login page
    } catch (error) {
      console.error('An error occurred during registration:', error);
      alert('An error occurred. Please try again.');
    }
  }
  
  // Attach Event Listener to Form
  document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Capture form data
    const userData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      countryCode: document.getElementById('countryCode').value,
      mobileNumber: document.getElementById('mobileNumber').value,
    };
  
    console.log('Captured User Data:', userData); // Log data for debugging
  
    // Call the function to handle registration
    handleRegister(userData);
  });
  