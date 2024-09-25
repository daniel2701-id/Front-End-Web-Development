var val1 = 3
var val2 = 8
var myName = 'Semmy Wellem Taju'

document.getElementById('my-btn').addEventListener('click', function() {
    myFunction(myName, val1, val2)
})

function myFunction(name, a, b) {
    var value = a * b
    var join = name+': '+value
    document.getElementById('value-demo').innerHTML = join
}