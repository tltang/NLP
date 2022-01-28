export async function fetchLanguage(baseURL, requestOptions) {
    try {
        const result = await fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                const newdatas = res.language_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let lang = newdata.name;
                    let relev = newdata.relevance;
                    i1++;

                    // console.log("append data");
                    Client.appendLanguage(i1, lang, relev);
                });
            })
    } catch (e) {
        console.log('error', e)
    }
}

export async function fetchCategory(baseURL, requestOptions) {
    try {
        const result = await fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                    // console.log(res);
                    const newdatas = res.category_list;
                    let i1 = 0;
                    newdatas.forEach((newdata) => {
                        let code    = newdata.code;
                        let name    = newdata.label;
                        let relev   = newdata.relevance;
                        i1++;

                        // console.log("append data2");
                        Client.appendCategory(i1, code, name, relev);
                    });
            })
    } catch (e) {
        console.log('error', e)
    }
}
