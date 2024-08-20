function initMap() {
    var location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }; // Replace with your coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = initMap;


function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', loadFooter);
fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
});