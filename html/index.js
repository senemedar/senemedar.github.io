window.addEventListener("scroll", scrollFunction);

function onLoad() {
	defaultTabs();
	moveMenuButton(-25);
}

function openTab(evt, tabName, tabs) {
    var i, tabcontent, tablinks, defaulttabs;
    tabcontent = document.getElementsByClassName("tabcontent" + tabs);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink" + tabs);
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

function defaultTabs() {
	defaulttabs = document.getElementsByName("defaulttab");
	for (i = 0; i < defaulttabs.length; i++) {
		temp = defaulttabs.item(i)
		if (temp.nodeName == "A") {
			temp.className += " active";
		} else {
			temp.style.display = "block";
		}
	}
}

function showMySon() {
    antek = document.getElementById("antek-img");
	antek.style.visibility = "visible";
	antek.style.opacity = "1";
	antek.style.boxShadow = "-10px 10px 15px #000";
}

function hideMySon() {
	antek = document.getElementById("antek-img");
	antek.style.visibility = "hidden";
	antek.style.opacity = "0";
	antek.style.boxShadow = "none";
}

function scrollFunction() {
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	portrait = document.getElementById("portrait");
	
	if (scrollpercent < 0.4) {
		portrait.style.transform = "rotate(-" + scrollpercent*150 + "deg)";
		portrait.style.right = scrollpercent*900 + "px";
	}
}

function animateMenu(x) {
    x.classList.toggle("change");
	if (document.getElementById("sidenav").style.width == "") {
		document.getElementById("sidenav").style.width = "200px";
		moveMenuButton(200);
	} else {
		document.getElementById("sidenav").style.width = "";
		moveMenuButton(-25);
	}
}

function hideMenuButton() {
	if (document.getElementById("sidenav").style.width !== "200px") {
		moveMenuButton(-25);
	}
}

function showMenuButton() {
	if (document.getElementById("sidenav").style.width !== "200px") {
		moveMenuButton(0);
	}
}

function moveMenuButton(pos) {
	document.getElementById("menu_button_container").style.left = pos + "px";
}

var __adobewebfontsappname__="dreamweaver";

