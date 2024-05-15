function loadRandomImage(pick) {
	// Computer picks their rps
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	var imagePath = 'images/rps/' + randomNumber + '.png';
	var result = 'try some rps!';
	document.getElementById('randomImage').src = imagePath;

	// Decide who wins
	if (pick == randomNumber)
	{
		result = 'It\'s a tie!';
	}
	else if ((pick == 1 && randomNumber == 3) ||
		(pick == 2 && randomNumber == 1) ||
		(pick == 3 && randomNumber == 2))
	{
		result = 'You win!';
	}
	else
	{
		result = 'You lose!';
	}

	document.getElementById('rpsResult').textContent = result;

	// The 0-2er asking for a bo5
	var wins = 0;
	var loses = 0;
	var draws = 0;
}