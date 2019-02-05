var checks = document.getElementsByClassName('project-card__checkbox');

Array.from(checks).forEach(e => (
    e.addEventListener("click", function(){
        this.parentNode.classList.toggle("project-card--active")
    })
));
