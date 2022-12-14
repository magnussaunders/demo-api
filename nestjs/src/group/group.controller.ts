import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {GroupService} from "./group.service";
import {Group} from "./interfaces/group.interface";

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {
    }

    // TODO: Improve endpoint paths. Follow the restful standards. GetAllGroups -> /group; GetGroupById -> /group/:groupId; GetGroupsByFilter -> /group/filter?name=sdsdsds; CreateGroup -> PUT /group
    @Get('filter')
    getAllGroups(query): Promise<Group[]> {
        // TODO: Below filters out null values
        const filterQuery = Object.assign({}, query)

        Object.keys(filterQuery).forEach(key => {
            if (!filterQuery[key]) {
                delete filterQuery[key]
            }
        })

        // Filter groups
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

    @Post(':groupId/addUser/:userId')
    addUserToGroup(@Param() params): Promise<string> {
        return this.groupService.addUserToGroup(params.groupId, params.userId)
    }

    @Post(':groupId/removeUserFromGroup/:userId')
    removeUserFromGroup(@Param() params): Promise<string> {
        return this.groupService.removeUserFromGroup(params.groupId, params.userId)
    }
}