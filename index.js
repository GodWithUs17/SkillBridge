
  const hamburger = document.getElementById('hamburger-menu');
  const nav = document.querySelector('nav');
  hamburger.onclick = function() {
    nav.classList.toggle('active');
  }


   function saveEmail() {
      const email = document.getElementById('emailInput').value;

      // Simple email validation
      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }

      // Save to localStorage
      localStorage.setItem('subscriberEmail', email);
      alert('Thank you for subscribing!');
      document.getElementById('emailInput').value = ''; // Clear the input field
    }


    
