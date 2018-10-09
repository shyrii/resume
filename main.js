const homeWrapper = document.getElementById('homeWrapper')
const aboutImage = document.getElementById('aboutImage')
const workImage = document.getElementById('workImage')

const lis = document.getElementsByTagName('li')

let now = 0;

window.addEventListener('scroll', (e) => {
    const scrollTop = window.scrollY
    const screenY = window.screen.availHeight
    // console.log(screenY)
    if (scrollTop > 0) {
        homeWrapper.classList.add('fixed')
        if (scrollTop >= screenY * 0.2 && scrollTop < screenY * 1) {
            if (now !== 1) {
                now = 1
                navigation()
            }
            aboutImage.classList.add(...['animated', 'flipInY', 'delay-4'])
        } else if (scrollTop >= screenY * 1 && scrollTop < screenY * 1.8) {
            if (now !== 2) {
                now = 2
                navigation()
            }
            workImage.classList.add(...['animated', 'flipInY', 'delay-4'])
        } else if (scrollTop >= screenY * 1.8 && scrollTop < screenY * 2.5) {
            if (now !== 3) {
                now = 3
                navigation()
            }
        } else if (scrollTop >= screenY * 2.5 && scrollTop < screenY * 4) {
            if (now !== 4) {
                now = 4
                navigation()
            }
        } else {
            if (now !== 0) {
                now = 0
                navigation()
            }
        }

    } else {
        homeWrapper.classList.remove('fixed')
    }
})

const navigation = () => {
    Array.prototype.forEach.call(lis, (v) => {
        v.classList.remove('active')
    })
    lis[lis.length - 1 - now].classList.add('active')
} 