import {Injectable} from "@nestjs/common";
import {CreateListModel} from "./create-list.model";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../users/user.schema";
import {Model} from "mongoose";
import {AuthUserModel} from "../../auth/auth-user.model";

@Injectable()
export class ShoppingListService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    findLists(user: AuthUserModel) {
        return this.userModel.find({
            email: user.userName
        }).select({
            shoppingLists: true
        })
    }

    createList(createListModel: CreateListModel, user: AuthUserModel) {
        return this.userModel.update({
            email: user.userName
        }, {
            $push: {
                shoppingLists: createListModel
            }
        });
    }
}
