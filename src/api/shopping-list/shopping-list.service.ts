import {Injectable} from "@nestjs/common";
import {CreateListModel} from "./create-list.model";

@Injectable()
export class ShoppingListService {

    createList(createListModel: CreateListModel) {
        return createListModel;
    }
}
