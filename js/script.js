var themeDark = localStorage.getItem("theme");
var site = document.querySelector('html');
var content = document.getElementsByClassName('content');
var img = document.getElementById('imgtheme');
var tovar = Number(localStorage.getItem("idcard"));

function changeTheme() {
	if(themeDark==="false") {
		site.style.setProperty('--color1','#373737');
		site.style.setProperty('--backgroundcolor','#111');
		site.style.setProperty('--colortext','rgb(211, 226, 228)');
		site.style.setProperty('--colorpanel','rgb(27, 29, 29)');
		content[0].style.backgroundImage = 'url("img/backdark.svg")';
		img.src = "img/dark.svg"
		localStorage.setItem("theme", "true");
		themeDark = "true";
	}
	else{
		site.style.setProperty('--color1','rgb(43, 62, 228)');
		site.style.setProperty('--backgroundcolor','rgb(217, 233, 235)');
		site.style.setProperty('--colortext','#000');
		site.style.setProperty('--colorpanel','rgb(165, 190, 194)');
		content[0].style.backgroundImage = 'url("img/back.svg")';
		img.src = "img/light.svg"
		localStorage.setItem("theme", "false");
		themeDark = "false";
	}
}

function checkTheme() {
	if(themeDark=="true") {
		site.style.setProperty('--color1','#373737');
		site.style.setProperty('--backgroundcolor','#111');
		site.style.setProperty('--colortext','rgb(211, 226, 228)');
		site.style.setProperty('--colorpanel','rgb(27, 29, 29)');
		img.src = "img/dark.svg"
	}
	else{
		site.style.setProperty('--color1','rgb(43, 62, 228)');
		site.style.setProperty('--backgroundcolor','rgb(217, 233, 235)');
		site.style.setProperty('--colortext','#000');
		site.style.setProperty('--colorpanel','rgb(165, 190, 194)');
		img.src = "img/light.svg"
	}
}


function setData(n) {
	//var buttons = document.getElementById("dot");
	//alert('g');
	localStorage.setItem("idcard", n);
	//alert(n);
}

function checkTovar() {
	switch(tovar){
		case 0: rtx2060(); break;
		case 1: rtx3060(); break;
		case 2: rtx3080(); break;
	}
}

function rtx2060() {
	var imgT = document.getElementsByClassName("imgT");
	//alert(imgT.length);
	for(var i=0;i<imgT.length;i++) {
		switch(i) {
			case 0: imgT[i].src = "img/2060/1.png"; break;
			case 1: imgT[i].src = "img/2060/2.png"; break;
			case 2: imgT[i].src = "img/2060/3.png"; break;
			case 3: imgT[i].src = "img/2060/4.png"; break;
		}
	}
}

function rtx3060() {
	var imgT = document.getElementsByClassName("imgT");
	var info = document.getElementsByClassName("h2");
	var ops = document.getElementsByClassName("h4");
	var gif = document.getElementById("gifimg");
	for(var i=0;i<imgT.length;i++) {
		switch(i) {
			case 0: imgT[i].src = "img/3060/1.png"; break;
			case 1: imgT[i].src = "img/3060/2.png"; break;
			case 2: imgT[i].src = "img/3060/3.png"; break;
			case 3: imgT[i].src = "img/3060/4.png"; break;
		}
	}
	info[0].textContent = "MSI GeForce RTX 3060";
	ops[0].textContent = "PCI-E 4.0, 12 ГБ GDDR6, 192 бит, 1320 МГц - 1837 МГц, DisplayPort x3, HDMI"
	gif.src = "img/3060/3060g.gif"
}

function rtx3080() {
	var imgT = document.getElementsByClassName("imgT");
	var info = document.getElementsByClassName("h2");
	var ops = document.getElementsByClassName("h4");
	var gif = document.getElementById("gifimg");
	for(var i=0;i<imgT.length;i++) {
		switch(i) {
			case 0: imgT[i].src = "img/3080/1.png"; break;
			case 1: imgT[i].src = "img/3080/2.png"; break;
			case 2: imgT[i].src = "img/3080/3.png"; break;
			case 3: imgT[i].src = "img/3080/4.png"; break;
		}
	}
	info[0].textContent = "GIGABYTE GeForce RTX 3080Ti";
	ops[0].textContent = "PCI-E 4.0, 12 ГБ GDDR6X, 384 бит, 1365 МГц, HDMI x2, DisplayPort x3"
	gif.src = "img/3080/3080g.gif"
}

jarallax(document.querySelectorAll('.jarallax'), {
	speed: 0.2,
  });