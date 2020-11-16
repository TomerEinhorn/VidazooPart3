fetch('https://static.vidazoo.com/basev/vpt.js?userId=57b1cfb0f39a2d1100d8969c&playerId=5b228165ded76a0004ad5a55')
    .then(response => response.text())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
