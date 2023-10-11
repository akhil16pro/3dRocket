// import { gsap } from 'gsap'

const tl = gsap.timeline({
  repeat: -1,
})

const nomalSpeed = () => {
  console.log('sfds')

  tl.to('#rotatingText', {
    rotate: 360,
    duration: 5,
    repeat: -1,

    ease: 'none',
  })
}

nomalSpeed()
window.addEventListener('mousedown', () => {
  mouseDown()
})

window.addEventListener('mouseup', () => {
  mouseOut()
})

let rocket = document.querySelector('.rocket')
let letterL = document.querySelector('.titleBox')
let letterR = document.querySelector('.textBox')
let anim = false

const t2 = gsap.timeline()
const mouseDown = () => {
  t2.add('start')

  tl.timeScale(3)

  t2.to(
    rocket,
    3,
    {
      scale: 1.1,
    },
    'end'
  )
  t2.fromTo(
    letterL,
    1.5,
    {
      xPercent: 0,
    },
    {
      xPercent: -50,
      delay: 0.5,
    },
    'start'
  )
  t2.fromTo(
    letterR,
    1.5,
    {
      xPercent: 0,
    },
    {
      xPercent: 50,
      delay: 0.5,
    },
    'start'
  )
}

const mouseOut = () => {
  t2.add('end')

  tl.timeScale(1)
  t2.to(
    rocket,
    3,
    {
      scale: 1,
    },
    'end'
  )
  t2.to(
    letterL,
    1.5,
    {
      xPercent: 0,
    },
    'end'
  )
  t2.to(
    letterR,
    1.5,
    {
      xPercent: 0,
    },
    'end'
  )
}

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    gsap.to('.pageLoader', 1, {
      scaleY: 0,
      transformOrigin: 'top top',
    })
    gsap.fromTo(
      '.bannerWrap h1 span',
      1,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.2,
        },
        delay: 0.5,
      }
    )

    gsap.fromTo(
      '.bannerWrap .textBox p',
      1,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,

        delay: 0.7,
      }
    )
    document.body.classList.add('domLoaded')
  }, 1000)
})
