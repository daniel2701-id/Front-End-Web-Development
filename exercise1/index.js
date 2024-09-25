<script>
    const text = '[ "Semmy Taju," "Wandi Darea", "Recky Ronga", "Dilben Tulum"]'

    const myArr = JSON.parse(text)

    console.log(myArr)

    document.getElementById('demo3').innerHTML = "My name is "+myArr[0]
</script>