System.import('single-spa').then(function(singleSpa) {
	singleSpa.registerApplication('mfeh-root', () => System.import('mfeh-root'), location => true);
	singleSpa.registerApplication('mfenav-root', () => System.import('mfenav-root'), location => true);
	//singleSpa.registerApplication('app-shell-root', () => System.import('app-shell-root'), location => true);

	singleSpa.registerApplication(
		'app-shell-root',
		() => System.import('app-shell-root'),
		location =>
			location.pathname.startsWith('/consumers') ||
			location.pathname.startsWith('/consumer-add') ||
			location.pathname.startsWith('/consumer-details/') ||
			location.pathname.startsWith('/consumer-edit/')
	);

	singleSpa.start();
});
