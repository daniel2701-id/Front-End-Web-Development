<script>
    const person = {name: "Semmy Wellem Taju", age: 33, city: "manado City"}

    let txt = ""
    for (let x in person) {
        txt += person [x] + ""
    }

    document.getElementById("exercise3").innerHTML = txt
</script>