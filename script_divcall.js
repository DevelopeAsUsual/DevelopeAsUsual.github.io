fetch('src/About.html')
.then(response => response.text())
.then(data => {
    document.getElementById('box-container').innerHTML = data;
})
.catch(error => console.error('Error loading the div:', error));
