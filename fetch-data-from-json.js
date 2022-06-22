const chartBox = document.querySelector(".container__body__chart");
//const chartItem = document.querySelector(".container__body__chart__item");
//const chartItem = document.createElement("div");
//chartItem.classList.add("container__body__chart__item");
//const itemShape = document.createElement("span");
//itemShape.classList.add("container__body__chart__item--shape");
//const itemDay = document.createElement("span");
//itemDay.classList.add("container__body__chart__item--day");

console.log("chartBox :>> ", chartBox);
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
	/* 
  //dataArray.forEach((item) => {
	//	itemShape.textContent = item.amount;
	//	itemDay.textContent = item.day;
	//	console.log("itemShape.textContent :>> ", itemShape.textContent);
	//	console.log("itemDay.textContent :>> ", itemDay.textContent);
	//	chartItem.appendChild(itemShape);
	//	chartItem.appendChild(itemDay);
	//	chartBox.appendChild(chartItem);
	//}); */
	for (let j = 0; j < dataArray.length; j++) {
		//console.log('dataArray[j] :>> ', dataArray[j]);
		//itemShape.textContent = dataArray[j].amount;
		//itemDay.textContent = dataArray[j].day;
		//chartItem.appendChild(itemShape);
		//chartItem.appendChild(itemDay);
		//chartBox.appendChild(chartItem);
    let element = `<div class="container__body__chart__item">
	    <div class="container__body__chart__item--shape">
        ${dataArray[j].amount}
      </div>
	    <div class="container__body__chart__item--day">
        ${dataArray[j].day}
      </div>
    </div>`;
    chartBox.appendChild(element);
	}
  
};

fetchChartData();
