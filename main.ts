input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 25; Index++) {
        basic.showString(String.fromCharCode(Index + 65))
        basic.pause(500)
        basic.showString(String.fromCharCode(Index + 97))
        basic.pause(500)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 9; Index++) {
        basic.showString(String.fromCharCode(Index + 48))
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
