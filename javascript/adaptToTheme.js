window.onload = function() {
	if (!sessionStorage.getItem('selectedTheme'))
		sessionStorage.setItem('selectedTheme', "../styles/lightStyle.css");

	var selectedTheme = sessionStorage.getItem('selectedTheme');

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = selectedTheme;
	document.head.appendChild(link);
};
