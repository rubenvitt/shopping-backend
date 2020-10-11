import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ShoppingList, ShoppingListSchema} from "../api/shopping-list/shopping-list.schema";

export type UserDocument = User & Document;

@Schema({
    timestamps: true
})
export class User {
    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    password: string;

    @Prop({type: [ShoppingListSchema], default: []})
    shoppingLists?: ShoppingList[];
}

export const UserSchema = SchemaFactory.createForClass(User);