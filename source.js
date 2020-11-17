function importExternal(url) {
  return new Promise((resolve, reject) => {
     fetch(url)
    .then(function (response) {
       return response.text();
    })
    .then(responseText => {
        const script = document.createElement('script');
        script.type= 'text/javascript';
        script.text = responseText;
 script.async = false;
    script.onload = () => resolve(window['external_global_component']);
    script.onerror = reject;

    //document.body.appendChild(script);
var s = document.getElementsByTagName('div')[0]; s.appendChild(script);

        
})
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
    
  });
}

