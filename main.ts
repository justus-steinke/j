let ZUFALL = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        ZUFALL = randint(0, 1)
    }
    if (ZUFALL == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (ZUFALL == 0) {
        basic.showIcon(IconNames.Sad)
    }
    control.waitMicros(6000)
    ZUFALL = 2
    basic.clearScreen()
})
