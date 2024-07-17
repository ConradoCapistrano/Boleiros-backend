import {Request} from 'express';
import {SensitiveUserDBActions, UserDBActions} from "../../../schemes/user/user.schema";
import {HttpStatus} from "../../../shared/enums/http-status.enum";

export class RegisterGetUsecase {
    private id: string;

    constructor(private readonly request: Request) {}

    async execute(): Promise<any> {
        this.id = this.request.params.id;

        const user = await UserDBActions.findItemById(this.id);
        const sensitiveUser = await SensitiveUserDBActions.findItemById(this.id);
        const emailVerified = await UserDBActions.findVerifiedEmailById(this.id);


        return {
            code: HttpStatus.OK,
            message: "Dados recuperados com sucesso",
            data: emailVerified
        };
    }

}