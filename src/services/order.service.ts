// Logica de negocio
// que se conecte y que se haga esa referencia con la base de datos
import ItemModel from "../models/item.model";

const getOrders = async () => {
    const responseItems = await ItemModel.find({});
    return responseItems;
}


export { getOrders };