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
		    var bablo_priemnik = document.getElementById('content4-r').childNodes[1];
			if  (bablo_priemnik != null) { bablo_priemnik.innerHTML = '<h1>Привет</h1>'; }

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

waitUntilElementPresent('section',1);