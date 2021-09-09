const ratio = .25
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
let sections = document.querySelectorAll('section')

let callbacks = function(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            let sectionId = entry.target.getAttribute('id')

            const nav = document.querySelector('.main-header')
            nav.querySelector('.active').classList.remove('active')

            let link = document.querySelector('a[href*=' + sectionId + ']')
            link.classList.add('active')
           
        }
    })
}
let observer = new IntersectionObserver(callbacks,options) 

sections.forEach(section => {
    observer.observe(section)
})