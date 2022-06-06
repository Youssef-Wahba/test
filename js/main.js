var quoteVar = document.getElementById("quote");
var authorVar = document.getElementById("author");

var quotes = [
	{
		quote: '"Be yourself; everyone else is already taken."',
		author: "--Oscar Wilde",
	},
	{
		quote:
			'"I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best."',
		author: "--Marilyn Monroe",
	},
	{
		quote:
			'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."',
		author: "--Albert Einstein",
	},
	{
		quote: '"So many books, so little time."',
		author: "--Frank Zappa",
	},
	{
		quote: '"A room without books is like a body without a soul."',
		author: "--Marcus Tullius Cicero",
	},
	{
		quote:
			'"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."',
		author: "--Bernard M. Baruch",
	},
	{
		quote:
			'"You know you are in love when you can not fall asleep because reality is finally better than your dreams."',
		author: "--Dr. Seuss",
	},
	{
		quote: '"Be the change that you wish to see in the world."',
		author: '"--Mahatma Gandhi"',
	},
];

function showQuote() {
	var x = Math.floor(Math.random() * quotes.length);
	quoteVar.innerHTML = quotes[x].quote;
	authorVar.innerHTML = quotes[x].author;

	///console.log(quotes[x].quote);
	//console.log(quotes[x].author);
}
