import {Body, Controller, Delete, Get, Param, Patch, Put} from '@nestjs/common';
import {GroupService} from "./group.service";
import {Group} from "./interfaces/group.interface";

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    getAllGroups(): Promise<Group[]> {
        return this.groupService.getAllGroups()
    }

    @Get(':id')
    getGroupById(@Param() params): Promise<Group> {
        return this.groupService.getGroupById(params.id)
    }

    @Put()
    createGroup(@Body() group: Group): Promise<Group> {
        return this.groupService.createGroup(group)
    }

    @Patch(':id')
    updateGroup(@Body() group: Group): Promise<Group> {
        return  this.groupService.updateGroup(group)
    }

    @Delete(':id')
    deleteGroup(groupId: string): Promise<string> {
        return this.groupService.deleteGroup(groupId)
    }
}
