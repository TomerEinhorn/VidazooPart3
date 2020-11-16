function importExternal(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = fetch(url, {mode: 'no-cors', headers:{'Access-Control-Allow-Origin':'*'}})
    .then(function (response) {
        return response.json();
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
    script.async = true;
    script.onload = () => resolve(window['external_global_component']);
    script.onerror = reject;

    document.body.appendChild(script);
  });
}

