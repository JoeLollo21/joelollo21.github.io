document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.href;
    var links = document.querySelectorAll('.sidebar ul li a');

    links.forEach(function(link) {
        var linkHref = link.getAttribute('href');
        if (currentPage.endsWith(linkHref)) {
            link.classList.add('is-active');
        }
    });
});