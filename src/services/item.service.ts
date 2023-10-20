// Logica de negocio
// que se conecte y que se haga esa referencia con la base de datos
import ItemModel from "../models/item.model";
import { Car } from '../interfaces/car.interface';

/**
 * 
 * @param item insert in DB
 * @returns 
 */
const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getCars = async () => {
    const responseItems = await ItemModel.find({});
    return responseItems;
}

const getCarById = async (id: string) => {
    const responseItemById = await ItemModel.findOne({ _id: id });
    return responseItemById;
}

const updateCar = async (id: string, data: Car) => {
    const responseUpdateCar = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true });
    return responseUpdateCar;
}

const deleteCar = async (id: string) => {
    const responseDeleteItemById = await ItemModel.findOneAndDelete({ _id: id })
    return responseDeleteItemById;
}

export { insertCar, getCars, getCarById, updateCar, deleteCar };