const btnToggle = document.getElementById('btn-toggle');
const navbarList = document.getElementById('navbar-list')

btnToggle.addEventListener('click', function () {
    if (document.body.clientWidth < 768) {
        navbarList.classList.toggle('container');
        navbarList.classList.toggle('show');
    }
})