window.onload = gtp;

function gtp() {
	const qry = new URLSearchParams(window.location.search);
	let page = {
		"home": "home.html",
		"works": "work.html",
		"work": "work.html",
		"news": "news.html",
		"art": "miscart.html",
		"misc_art": "miscart.html",
		"miscellaneous_art": "miscart.html",
		"char": "char.html",
		"characters": "char.html",
		"character": "char.html",
		"credits": "credit.html",
		"credit": "credit.html",
		"kd03": "kd03.html",
		"efs": "kd03.html",
		"bsih": "kdbsih.html",
		"kdbsih": "kdbsih.html",
		"disioma": "disioma/disioma.html"};
	page = page[qry.get('l')];
	if (qry.get('l') != null) { document.getElementById('content').src = page ; }
}

function udl() {
	let e = document.getElementById('content').src.split('/');
	e = e[e.length - 1].split('.')[0];
	document.getElementById('link').innerHTML = e;
}