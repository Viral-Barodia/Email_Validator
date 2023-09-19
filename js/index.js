console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "202001007",
    "email": "202001007@daiict.ac.in",
    "score": 0.8,
    "state": "deliverable",
    "domain": "daiict.ac.in",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img src="img/loading.svg">`

    let key = "ema_live_ALi4gXR3s66lwkKO3185SZbvfmxxr0xFmc2Ee251"
    let email=document.getElementById("username").value
    
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})