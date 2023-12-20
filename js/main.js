let text = document.querySelector('.text p');
text.innerHTML = text.innerText
	.split('')
	.map((el, i) => `<b style="transform:rotate(${i * 6.3}deg)">${el}</b>`)
	.join('');
