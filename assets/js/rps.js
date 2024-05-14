function loadRandomImage(pick) {
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	var imagePath = 'images/rps/' + randomNumber + '.png';
	document.getElementById('randomImage').src = imagePath;
	var result = ' ';

	if (pick === computerChoice) {
		result = 'It\'s a tie!';
	}
	else if ((pick === 1 && randomNumber === 3) ||
		(pick === 2 && randomNumber === 1) ||
		(pick === 3 && randomNumber === 2)) {
		result = 'You win!';
	}
	else {
		result = 'You lose!';
	}

	document.getElementById('rpsResult').textContent = result;
}