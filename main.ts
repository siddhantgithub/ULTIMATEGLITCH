basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
        turtle.setSpeed(50)
    }
    for (let index = 0; index < 4; index++) {
        turtle.turnLeft()
        turtle.forward(1)
        turtle.setSpeed(50)
    }
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        turtle.forward(1)
        turtle.setSpeed(50)
    }
})
