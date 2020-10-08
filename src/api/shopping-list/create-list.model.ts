import {IsEmpty, IsNotEmpty, IsNotEmptyObject} from 'class-validator'

export class CreateListModel {
    @IsNotEmpty()
    name: string;
}
