
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  //login 

  // Login function to handle login logic
// Login function to handle login logic

console.log("script loaded")
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('form2Example1').value;
  const password = document.getElementById('form2Example2').value;

  try {
    // Send login data to the backend
    const response = await fetch('http://localhost:3000/api/conversion/login', { // Replace with your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert('Login failed: ' + errorData.errors);
      return;
    }

    const data = await response.json();
    const token = data.token;

    // Store the token in localStorage
    localStorage.setItem('jwt', token);
    alert('Login successful!');

    // Redirect to the dashboard page
    window.location.href = './dashboard.html'; // Update with the relative path to dashboard.html
  } catch (error) {
    console.error('An error occurred:', error);
    alert('An error occurred. Please try again.');
  }
});






  


