import { Body, Controller, Post } from '@nestjs/common';
import { CreatePartnerUserDto } from '../users/dto/create-partner-user.dto';
import { UserPresenter } from '../users/user.presenter';
import { UsersService } from '../users/users.service';

@Controller('partner/users')
export class PartnerUsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createPartnerUser(@Body() data: CreatePartnerUserDto) {
    const user = await this.usersService.createPartnerUser(data);
    return new UserPresenter(user);
  }
}
