const exp = /^\$?-?0*(?:\d+(?!,)(?:\.\d{1,2})?|(?:\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?))$/

const subscription_key = '0aea31842bmsh241b9a498c15db8p1d300cjsn18352945a806'


function converter(){

}

let elms = document.getElementsByTagName("*"),
    len = elms.length;
for(let ii = 0; ii < len; ii++) {
    let myChildred = elms[ii].childNodes;
    len2 = myChildred.length;
    for (let jj = 0; jj < len2; jj++) {
        if(myChildred[jj].nodeType === 3) {
            myChildred[jj].nodeValue = myChildred[jj].nodeValue.replace(exp,"123");
        }
    }
}