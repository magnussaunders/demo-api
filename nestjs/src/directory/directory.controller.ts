import {Body, Controller, Delete, Get, Param, Patch, Put} from '@nestjs/common';
import {DirectoryService} from "./directory.service";
import {Directory} from "./interfaces/directory.interface";

@Controller('directory')
export class DirectoryController {
    constructor(private readonly directoryService: DirectoryService) {}

    @Get()
    getAllDirectories(@Param() params): Promise<Directory[]> {
        return this.directoryService.getAllDirectories()
    }

    @Get(':id')
    getDirectoryById(@Param() params): Promise<Directory> {
        return this.directoryService.getDirectory(params.id)
    }

    @Put()
    createDirectory(@Body() directory: Directory): Promise<Directory> {
        return this.directoryService.createDirectory(directory)
    }

    @Patch(':id')
    updateDirectory(@Param() params, @Body() directory: Directory): Promise<Directory> {
        return this.directoryService.updateDirectory(params.id, directory)
    }

    @Delete(':id')
    deleteDirectory(@Param() params): Promise<string> {
        return this.directoryService.deleteDirectory(params.id)
    }
}
