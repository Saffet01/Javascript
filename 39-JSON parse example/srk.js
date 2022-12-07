const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        //console.log(request,request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            //console.log(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            //console.log('başarılı cevap alamadık!')
            callback('başarılı cevap alamadık!',undefined);
        }
    })
    request.open('GET', 'resource');
    request.send();
}

getTodos('can.json',(err,data)=>{
        console.log(data);
});

