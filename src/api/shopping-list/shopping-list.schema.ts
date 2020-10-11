import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {
    @Prop({required: true})
    name: string;
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);