// export class Expense {
// 	constructor(
// 		id = new Date().getTime(),
// 		title,
// 		amount,
// 		category,
// 		incurredOn = new Date().toLocaleString(),
// 		notes,
// 		spendedBy,
// 		createdAt = new Date().toLocaleString(),
// 		updatedAt = new Date().toLocaleString()
// 	) {
// 		this.id = id;
// 		this.title = title;
// 		this.amount = amount;
// 		this.category = category;
// 		this.incurredOn = incurredOn;
// 		this.notes = notes;
// 		this.spendedBy = spendedBy;
// 		this.createdAt = createdAt;
// 		this.updatedAt = updatedAt;
// 	}
// }
export class Expense {
	constructor(title, amount, category, incurredOn, notes, spendedBy) {
		this.id = new Date().getTime();
		this.title = title;
		this.amount = amount;
		this.category = category;
		this.incurredOn = incurredOn;
		this.notes = notes;
		this.spendedBy = spendedBy;
		this.createdAt = new Date().toLocaleString();
		this.updatedAt = new Date().toLocaleString();
	}
}
