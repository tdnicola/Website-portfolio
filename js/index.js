window.addEventListener('load', function (event) {
	setTimeout(function () {
		new TypeIt('.typing')
			.type('Data Analyst')
			.pause(1000)
			.delete()
			.type('Developer')
			.pause(1000)
			.delete()
			.type('Likes to code')
			.go();
	}, 500);
});
