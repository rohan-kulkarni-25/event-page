


const viewdetails = (e) => {
  console.log('clicked');
  let card = e.target.parentElement.children[1]
  console.log(e.target.innerText);
  if (card.classList.contains('hidden')) {
    console.log(e.target);
    e.target.innerText = 'HIDE DETAILS'
  } else {
    e.target.innerText = 'VIEW DETAILS'
  }

  card.classList.toggle('hidden')
}

const value = +(document.getElementById('upcount').textContent)
    console.log(typeof(value));
  for (let index = 0; index <= value; index++) {
    document.getElementById('upcount').textContent = index
  }


  const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = Math.ceil(target / speed);
    console.log(inc);
		if (count < target) {
			counter.innerText = (count + inc);
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
