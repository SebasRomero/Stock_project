import { Injectable } from '@nestjs/common';

//This is the user structure or fields to save in a db.
export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'sebas',
            username: 'sromero',
            password: '123456'
        },
        {
            id: 2,
            name:'romero',
            username: 'rsebas',
            password: '123456'
        }
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
