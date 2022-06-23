const chartBox = document.querySelector(".container__body__chart");

const dataArray = [];
const fetchChartData = async () => {
	await fetch("./data.json")
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < data.length; i++) {
				//console.log("data[i] :>> ", data[i]);
				dataArray.push(data[i]);
			}
			//return data;
		});
	createChartItem(dataArray);
	/* chartBox.childNodes.forEach((chartItem) => {
		console.log(
			"chartItem.firstElementChild.textContent :>> ",
			chartItem.firstElementChild.textContent,
		);
		chartItem.style.height = `calc(${chartItem.firstElementChild.textContent}px * 2)`;
	}); */
	for (let i = 0; i < chartBox.childNodes.length; i++) {
		chartBox.childNodes[j].firstElementChild.style.height = 
		`calc(${chartBox.childNodes.firstElementChild.textContent}px * 2)`;
	}
};
const createChartItem = (array) => {
	for (let j = 0; j < array.length; j++) {
		let element = `<div class="container__body__chart__item">
	    <span class="container__body__chart__item--shape container__body__chart__item--shape--${j}">
        ${array[j].amount}
      </span>
	    <span class="container__body__chart__item--day">
        ${array[j].day}
      </span>
    </div>`;
		chartBox.innerHTML += element;
	}
};

fetchChartData();

/* const chartItemShapes = document.querySelectorAll(
	".container__body__chart__item--shape",
); */
//console.log('chartItemShapes :>> ', chartItemShapes);
