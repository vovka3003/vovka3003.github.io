function waitUntilElementPresent(tagName, timeoutInSeconds) {
	
	
	
    var currentTime = new Date().getTime();
	
    var endTime = currentTime + timeoutInSeconds * 1000;
    var checkExist = setInterval(function () {
		
		
		
		var sections = document.getElementsByTagName('section');
        if (sections[sections.length-1].innerText.indexOf('with Mobirise')) {
            clearInterval(checkExist);
			
			var sections = document.getElementsByTagName('section');
			sections[sections.length-1].innerHTML = '';
			// если уж нашло самый нижний - меняем верхние смело
		    var kotletopriemnik = document.getElementById('content4-r').childNodes[1];
			if  (kotletopriemnik != null) { kotletopriemnik.innerHTML = '<iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%20Develop-Soft&targets-hint=&default-sum=&button-text=13&payment-type-choice=on&mobile-payment-type-choice=on&comment=on&hint=%D0%A2%D1%83%D1%82%20%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9&successURL=https%3A%2F%2Fvovka3003.github.io%2FOn_Money_Insert.html%23donate_success&quickpay=shop&account=4100185639160" width="100%" height="316" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'; }

            return;
			
        } else if (endTime < new Date().getTime()) {
            clearInterval(checkExist);
            console.log('not found in specified time.');
            return;
        } else {
            console.log('waiting for element to be present…');
			
        } 
    }, 100); 
}

var body = document.getElementsByTagName("body")[0];

body.addEventListener("load", init(), false);

function init() {
        alert("it works!");
};

// waitUntilElementPresent('section',10); // поиск элемента будет происходить в течении 10 секунд, чтобы не завесить браузер в говнище...