fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});
