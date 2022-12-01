import {Body, Controller, Delete, Get, Param, Patch, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./interfaces/user.interface";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param() params): Promise<User> {
        return this.userService.getUserById(params.id)
    }

    @Put()
    createUser(@Body() user: User): Promise<User> {
        return this.userService.createUser(user)
    }

    @Patch(':id')
    updateUserById(@Param() params, @Body() user: User): Promise<User> {
        return this.userService.updateUser(params.id, user)
    }

    @Delete(':id')
    deleteUserById(@Param() params): Promise<string> {
        return this.userService.deleteUser(params.id)
    }
}
