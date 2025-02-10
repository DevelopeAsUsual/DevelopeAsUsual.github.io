fetch('src/About.html')
.then(response => response.text())
.then(data => {
    document.getElementById('About').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));


fetch('src/Navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('Navbar').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));

fetch('src/Education.html')
.then(response => response.text())
.then(data => {
    document.getElementById('Education').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));

fetch('src/Work.html')
.then(response => response.text())
.then(data => {
    document.getElementById('Work').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));

fetch('src/Project.html')
.then(response => response.text())
.then(data => {
    document.getElementById('Project').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));

fetch('src/Contact.html')
.then(response => response.text())
.then(data => {
    document.getElementById('Contact').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));


tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          // 'arsenica': ['Arsenica Bold', 'sans-serif'],
          'arsenica': ['Arsenica', 'sans-serif'],
        }
      }
    }
  };

