const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src ='./img/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
    constructor({ positon, velocity, image }) {
        this.positon = positon
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.positon.x, this.positon.y)
    }
}

const background = new Sprite({
    positon: {
        x: -785,
        y: -650
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 4 / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )

    if (key.w.pressed && lastKey === 'w') background.positon.y += 3
    else if (key.a.pressed && lastKey === 'a') background.positon.x += 3
    else if (key.s.pressed && lastKey === 's') background.positon.y -= 3
    else if (key.d.pressed && lastKey === 'd') background.positon.x -= 3
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})

    

    