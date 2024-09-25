<script>
    const Obj = {name: "Semmy Wellem Taju", age: 33, city: "manado city"}
    const myJSON = JSON.stringify(myObj)
    localStorage.setItem("testJSON", myJSON)

    console.log(myJSON)

    let text = localStorage.getItem("testJSON")
    let obj = JSON.parse(text)

    document.getElementById("txt-name").innerHTML = "my name is"+obj.name
    document.getElementById("txt-age").innerHTML = "i am"+obj.age+
    document.getElementById("txt-city").innerHTML = "i live in"+obj.city+"."
</script>