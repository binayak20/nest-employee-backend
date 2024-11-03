import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Test user 1',
      email: 'test1@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Test user 2',
      email: 'test2@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Test user 3',
      email: 'test3@gmail.com',
      role: 'MANAGER',
    },
  ];

  findAll(role?: 'INTERNS' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0) throw new NotFoundException('User not found');
      return roleArray;
    }
    return this.users;
  }

  fineOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHeighestId = this.users[this.users.length - 1].id + 1;
    const newUser = {
      id: usersByHeighestId,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.fineOne(id);
  }

  delete(id: number) {
    // this.users.splice(id - 1, 1);
    // return this.users;
    const removeUser = this.fineOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removeUser;
  }
}
