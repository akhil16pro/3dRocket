// import { gsap } from 'gsap'

const tl = gsap.timeline({
  repeat: -1,
})

const nomalSpeed = () => {
  tl.to('#rotatingText', {
    rotate: 360,
    duration: 5,
    repeat: -1,

    ease: 'none',
  })
}

nomalSpeed()

window.addEventListener('touchstart', mouseDown)
window.addEventListener('touchend', mouseOut)
window.addEventListener('mousedown', mouseDown)

window.addEventListener('mouseup', mouseOut)

let rocket = document.querySelector('.rocket')
let letterL = document.querySelector('.titleBox')
let letterR = document.querySelector('.textBox')
let anim = false

let maxDuration =
  window.innerWidth > 768 ? window.innerWidth / 6 : window.innerWidth
let timer = false

const t2 = gsap.timeline()

let currentX = 0.1
let aimX = 0
let mOut = true

function mouseDown() {
  mOut = false
  // gsap.to('body', 2, {
  //   backgroundPosition: '100% 0%',
  // })
  setInterval(() => {
    aimX += 0.5
  }, 50)

  t2.add('start')
  tl.timeScale(3)
  if (window.innerWidth > 768) {
    t2.to(
      rocket,
      3,
      {
        scale: 1.1,
      },
      'end'
    )
  }
}

function mouseOut() {
  mOut = true
  // gsap.to('body', 2, {
  //   backgroundPosition: '50% 0%',
  // })
  t2.add('end')

  tl.timeScale(1)
  if (window.innerWidth > 768) {
    t2.to(
      rocket,
      3,
      {
        scale: 1,
      },
      'end'
    )
  }
}

const grow = () => {
  if (mOut == true) {
    if (aimX > 0) {
      aimX -= 12
      currentX = aimX
    }
  } else {
    if (aimX < maxDuration) {
      aimX += 6
      currentX = currentX + (aimX - currentX) * 2
    }
  }
  gsap.to(
    letterL,

    {
      x: currentX * -1,
    }
  )

  gsap.to(
    letterR,

    {
      x: currentX,
    }
  )

  requestAnimationFrame(grow)
}

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    grow()
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
