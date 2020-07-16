let intensité = 0
let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    intensité = 255
    led.plot(x, y)
    for (let index = 0; index < 7; index++) {
        if (led.pointBrightness(x, y) < 255) {
            basic.pause(500)
            led.plot(x, y - 1)
            intensité += -50
            led.plotBrightness(x, y, intensité)
        }
    }
})
