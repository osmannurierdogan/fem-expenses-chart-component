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
};
const createChartItem = (array) => {
	for (let j = 0; j < array.length; j++) {
		let element = `<div class="container__body__chart__item">
			<span class="container__body__chart__item__text">${array[j].amount}</span>
	    <span class="container__body__chart__item--shape">
      </span>
	    <span class="container__body__chart__item--day">
        ${array[j].day}
      </span>
    </div>`;
		chartBox.innerHTML += element;

		const shapeItemsText = document.querySelectorAll(
			".container__body__chart__item>.container__body__chart__item__text",
		);
		const shapeItems = document.querySelectorAll(
			".container__body__chart__item>.container__body__chart__item--shape",
		);

		shapeItems.forEach((shapeItem, index) => {
			shapeItem.style.height = `calc(${array[index].amount}px * 3)`;
			const maxAmountObject = array.reduce((max, object) =>
				max.amount > object.amount ? max : object,
			);
			
			if (shapeItemsText[index].textContent == maxAmountObject.amount) {
				shapeItem.classList.add(
					"container__body__chart__item--shape--max",
				);
			}

			shapeItem.addEventListener("mouseover", () => {
				shapeItemsText[index].style.visibility = "visible";
				shapeItemsText[index].style.transition = "all 0.3s";
			});
			shapeItem.addEventListener("mouseleave", () => {
				shapeItemsText[index].style.transition = "all 0.1s";
				shapeItemsText[index].style.visibility = "hidden";
			});
		});

		shapeItemsText.forEach((item) => {});
	}
};

fetchChartData();
