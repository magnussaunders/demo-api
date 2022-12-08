import {Body, Controller, Delete, Get, Param, Patch, Put} from '@nestjs/common';
import {ResourceService} from "./resource.service";
import {Resource} from "./interfaces/resource.interface";

@Controller('resource')
export class ResourceController {
    constructor(private readonly resourceService: ResourceService) {
    }

    @Get('getAllResources')
    getAllResources(): Promise<Resource[]> {
        return this.resourceService.getAllResources()
    }

    @Get('getResourceById/:resourceId')
    getResourceById(@Param() params): Promise<Resource> {
        return this.resourceService.getResourceById(params.resourceId)
    }

    @Get('getResourcesByDirectoryId/:directoryId')
    getResourcesByDirectoryId(@Param() params): Promise<Resource[]> {
        return this.resourceService.getResourcesByDirectoryId(params.directoryId)
    }

    @Put('createResource')
    createResource(@Body() resource: Resource): Promise<Resource> {
        return this.resourceService.createResource(resource)
    }

    @Patch('updateResourceById/:resourceId')
    updateResource(@Param() params, @Body() resource: Resource): Promise<Resource> {
        return this.resourceService.updateResource(params.resourceId, resource)
    }

    @Delete('deleteResourceById/:resourceId')
    deleteResource(@Param() params): Promise<string> {
        return this.resourceService.deleteResource(params.resourceId)
    }
}
