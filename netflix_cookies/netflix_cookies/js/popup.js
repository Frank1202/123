(function() {

    $('#open').click(function () {

        let input = document.getElementById("token");
        let token = input.value;
        if(token.length < 16) {
            alert('请输入正确的激活码');
            return false;
        }

        $.get('https://api.qiananhua.com/cookies/index?token='+token, function (res) {
            let data = JSON.parse(res);
            if(data.code !== 0) {
                alert(data.msg);
                chrome.tabs.create({url: 'https://bbs.naifei.shop'});
                return false;
            }

            let cookie = JSON.parse(data.data['cookie']);

            setCookies(cookie)

        })
    });

    $('#tg').click(() => {
        chrome.tabs.create({url: 'https://api.naifei.shop/cookies/tg'});
    });

    $('#out').click(() => {
        chrome.tabs.create({url: 'https://www.netflix.com/clearcookies'});
    });

    $('#naifei_shop').click(() => {
        chrome.tabs.create({url: 'https://naifei.shop'});
    });

    $('#jc').click(() => {
        chrome.tabs.create({url: 'https://api.naifei.shop/cookies/jc'});
    });

    $('#bo').click(() => {
        chrome.tabs.create({url: 'https://api.naifei.shop/cookies/bo'});
    });

})();


function setCookies(obj) {

    obj.forEach(function (item) {

        let params = {
            url: 'https://www.netflix.com/',
            domain: item.domain,
            expirationDate: item.expirationDate,
            name: item.name,
            path: item.path,
            sameSite: item.sameSite,
            secure: item.secure,
            value: item.value,
        };
        console.log(params);

        chrome.cookies.set(params, function(cookie) {

        });
    });

    chrome.tabs.create({url: 'https://netflix.com/'});
}

chrome.cookies.onChanged.addListener((changeInfo) => {

});