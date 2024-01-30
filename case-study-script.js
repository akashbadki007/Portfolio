let navcontainer = document.querySelectorAll('.nav-links-container');
let headerContainer = document.querySelectorAll('header nav a');
window.onscroll = () => {
    navcontainer.forEach(links => {
        let top = window.scrollY;
        let offset = links.offsetTop - 150;
        let height = links.offsetHeight;
        let id = links.getAttribute('id');
        if(top >= offset && top < offset + height) {
            headerContainer.forEach(linkss => {
                linkss.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};