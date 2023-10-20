import { Schema, Types, model, Model } from "mongoose"
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true, // fecha de creacion y fecha de actualizacion
        versionKey: false // va creando versiones
    },
);
// nombre de la tabla en DB (items), y el schema
const ItemModel = model('items', ItemSchema);
export default ItemModel; 