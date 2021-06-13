// Initialize and add the map
function initMap() {
    //my location
    const loc = { lat: -1.974081, lng: 30.075819 };
    //centered map location
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });
    //the marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map:map });
}
//sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('.navbar').style.opacity = 0.9;
    } else {
        document.querySelector('.navbar').style.opacity = 1;
    }
});
// smooth scrolling
// $('.navbar a, .btn').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//                 scrollTop:$(hash).offset().top -100
//             },
//             800
//         );
//     }
// });


const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')


toggleButton.addEventListener('click', () => {
    // toggleButton.classList.toggle('active')
    navbarLinks.classList.toggle('active')
})



