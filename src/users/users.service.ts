import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
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
      role: 'ENGINNER',
    },
    {
      id: 3,
      name: 'Test user 3',
      email: 'test3@gmail.com',
      role: 'MANAGER',
    },
  ];
}
