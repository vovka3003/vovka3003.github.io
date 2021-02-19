// var sections = document.getElementsByTagName('section');
//sections[sections.length-1].innerHTML = '';

function waitUntilElementPresent(tagName, timeoutInSeconds) {
    var currentTime = new Date().getTime();
	
    var endTime = currentTime + timeoutInSeconds * 1000;
    var checkExist = setInterval(function () {
		var sections = document.getElementsByTagName('section');
		
        if (document.getElementsByTagName(tagName).length == 7) {
            clearInterval(checkExist);
			console.log('1');
			var sections = document.getElementsByTagName('section');
			//sections[sections.length-1].innerHTML = '';
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

waitUntilElementPresent('section',3);
