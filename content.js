const exp = /^\$?-?0*(?:\d+(?!,)(?:\.\d{1,2})?|(?:\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?))$/

fetch('https://api.exchangerate.host/latest', {
    method: 'GET',
    headers: {
        "Content-Type": 'application/json'
    }
})
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            console.log('response not successfull')
        }
    })
    .then((data)=>{
       console.log(data.rates.EUR);
        let elms = document.getElementsByTagName("*"),
            len = elms.length;
        for(let ii = 0; ii < len; ii++) {
            let myChildred = elms[ii].childNodes;
            len2 = myChildred.length;
            for (let jj = 0; jj < len2; jj++) {
                if(myChildred[jj].nodeType === 3) {
                    myChildred[jj].nodeValue = myChildred[jj].nodeValue.replace(exp, data.rates.KES * exp);
                }
            }
        }
    })
    .catch(error => console.log(error))