export interface WatchModel {
	id: Number;
	brand: String;
	model: String;
	type: String;
	price: Number;
	bestSeler: Number;
	material: String;
	waterResistance: boolean;
	features: String;
	releaseDate: Date;
	images: String[];
	description: String;
    stockQuantity: Number;
    // owner
    //watchOrder
}
