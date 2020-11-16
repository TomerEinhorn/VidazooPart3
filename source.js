function importExternal(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = "https://static.vidazoo.com/basev/vpt.js?userId=57b1cfb0f39a2d1100d8969c&playerId=5b228165ded76a0004ad5a55";
    script.async = true;
    script.onload = () => resolve(window['external_global_component']);
    script.onerror = reject;

    document.body.appendChild(script);
  });
}

