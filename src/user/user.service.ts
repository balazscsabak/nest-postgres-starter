import {
  comparePassword,
  hashPassword,
} from 'src/common/helper/password.helper';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (await this.userRepository.findOne({ email: createUserDto.email })) {
      throw new BadRequestException();
    }

    const user = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = await hashPassword(createUserDto.password);

    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(value: number | string) {
    if (typeof value === 'string') {
      return this.userRepository.findOne({ email: value });
    }

    return this.userRepository.findOne(value);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
