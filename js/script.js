class Restaurant {
	constructor(name, cusineType) {
		this.name = name;
		this.cusineType = cusineType;
		this.served = 0;
	}

	showInfo() {
		return `${this.name} is a restaurant of ${this.cusineType} meal.`;
	}

	isOpen() {
		let currentHour = new Date().getHours();
		let currentDay = new Date().getDay();
		if (currentDay === 6 || currentDay === 0) {
			return `${this.name} is closed`;
		} else {
			if (currentHour > 9 && currentHour < 22) {
				return `${this.name} is open`;
			} else {
				return `${this.name} is closed`;
			}
		}

	}

	Serve() {
		return (this.served += 1);
	}

	setServed(number) {
		return (this.served = this.served += number);
	}

	showTotalServed() {
		return `Show Total Served: ${this.served}`;
	}
}

const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
console.log(beshBarmak.isOpen());
console.log(beshBarmak.Serve());
console.log(beshBarmak.setServed(5));
console.log(beshBarmak.showTotalServed());



// cars 
class Cars {
	constructor(model, year, color, engineType) {
		this.model = model;
		this.year = year;
		this.color = color;
		this.engineType = engineType;
	}

	showInfo() {
		return `Model:${this.model} Year: ${this.year} Color: ${this.color} Engine Type: ${this.engineType}`;
	}
}

class electroCars extends Cars {
	constructor(model, year, color, engineType, battery) {
		super(model, year, color, engineType);
		this.battery = battery;
	}

	promote() {
		return `Электрокроссовер HUAWEI: создал новый электрокар с емкостью аккумулятора 96 кВТ.ч, обеспечивающий дальнобойность в 900км.`;
	}
}

const camry = new Cars("Camry EX", "2021", "white", "gas");
console.log(camry.showInfo());

const hunday = new electroCars("Hunday", "2022", "orange", "electro");
console.log(hunday.showInfo());

const huawei = new electroCars("HUAWEI", "2021", "red", "electro");
console.log(huawei.showInfo());
console.log(huawei.promote());

