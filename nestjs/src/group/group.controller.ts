import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {GroupService} from "./group.service";
import {Group} from "./interfaces/group.interface";

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {
    }

    @Get('getAllGroups')
    getAllGroups(): Promise<Group[]> {
        return this.groupService.getAllGroups()
    }

    @Get('getGroupById/:groupId')
    getGroupById(@Param() params): Promise<Group> {
        return this.groupService.getGroupById(params.groupId)
    }

    @Get('getGroupsByDirectoryId/:directoryId')
    getGroupsByDirectoryId(@Param() params): Promise<Group[]> {
        return this.groupService.getGroupsByDirectoryId(params.directoryId)
    }

    @Put('createGroup')
    createGroup(@Body() group: Group): Promise<Group> {
        return this.groupService.createGroup(group)
    }

    @Patch('updateGroupById/:groupId')
    updateGroup(@Param() params, @Body() group: Group): Promise<Group> {
        return this.groupService.updateGroup(params.groupId, group)
    }

    @Delete('deleteGroupById/:groupId')
    deleteGroup(@Param() params): Promise<string> {
        return this.groupService.deleteGroup(params.groupId)
    }

    @Post(':groupId/addUserToGroup/:userId')
    addUserToGroup(@Param() params): Promise<string> {
        return this.groupService.addUserToGroup(params.groupId, params.userId)
    }

    @Post(':groupId/removeUserFromGroup/:userId')
    removeUserFromGroup(@Param() params): Promise<string> {
        return this.groupService.removeUserFromGroup(params.groupId, params.userId)
    }
}