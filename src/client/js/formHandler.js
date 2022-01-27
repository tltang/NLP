import {updateUI} from "./formPost";

export function onFocus() {
    document.getElementById('name').style.backgroundColor = "yellow";
}

export function onBlur() {
    document.getElementById('name').style.backgroundColor = "";
}

export function handleSubmit(event) {
    event.preventDefault()

    let baseURL = "https://api.meaningcloud.com/lang-4.0/identification";

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForInput(formText);

    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("txt", formText);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    console.log(requestOptions);
    console.log("::: Form Submitted :::")

    if (isValid) {
        fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                const newdatas = res.language_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let lang    = newdata.name;
                    let relev   = newdata.relevance;
                    i1++;

                    Client.postData('/addHistory', {
                        langno: i1,
                        language: lang,
                        relevance: relev
                    })
                    // Object.entries(newdata).forEach(([key, value]) => {
                    //     console.log(`${key}: ${value}`);
                    // });
                });
                Client.updateUI()
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Please enter a phrase first!');
    }
}

export function handleSubmit2(event) {
    event.preventDefault()

    let baseURL = "https://api.meaningcloud.com/deepcategorization-1.0";

    // check what text was put into the form field
    let formText  = document.getElementById('name').value
    let modelText = document.getElementById('models').value

    const isValid = Client.checkForInput(formText);
    console.log(formText);
    console.log(modelText);
    console.log(API_KEY1);
    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("url", formText);
    formdata.append("model", modelText);  // like IAB_2.0_en

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    console.log(requestOptions);
    console.log("::: Form Submitted :::")

    if (isValid) {
        fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                const newdatas = res.category_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let code    = newdata.code;
                    let name    = newdata.label;
                    let relev   = newdata.relevance;
                    i1++;

                    Client.postData('/addHistory', {
                        categoryno: i1,
                        code: code,
                        label: name,
                        relevance: relev
                    })
                    // Object.entries(newdata).forEach(([key, value]) => {
                    //     console.log(`${key}: ${value}`);
                    // });
                });
                Client.updateUI2()
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Please enter a URL first!');
    }
}
