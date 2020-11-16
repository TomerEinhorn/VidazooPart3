fetch('https://static.vidazoo.com/basev/vpt.js?userId=57b1cfb0f39a2d1100d8969c&playerId=5b228165ded76a0004ad5a55')
    .then(function (response) {
        return response.text();;
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
