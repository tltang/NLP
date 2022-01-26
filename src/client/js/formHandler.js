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
                console.log(res);
                const lang = res.language_list[0].name;
                const relev = res.language_list[0].relevance;
                //postData('/addHistory', {language: lang, relevance: relev})
                document.getElementById('results').innerHTML = res.language_list[0].name;
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

    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("txt", formText);
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
                // Object.entries(res).forEach(([key, value]) => {
                //     console.log(`${key}: ${value}`);
                // });
                // const newdatas = res;
                // newdatas.forEach((newdata) => {
                //     //console.log(`{$repo.name} has ${repo.stargazers_count} stars`);
                // });
                // newdatas.forEach((newdata) => {
                //     Object.entries(repo).forEach(([key, value]) => {
                //         console.log(`${key}: ${value}`);
                //     });
                // });
                console.log(res);
                const code = res.category_list[0].code;
                const name = res.category_list[0].label;
                const relev = res.category_list[0].relevance;
                //postData('/addHistory', {language: lang, relevance: relev})
                document.getElementById('results').innerHTML = res.category_list[0].label;
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Please enter a URL first!');
    }
}
