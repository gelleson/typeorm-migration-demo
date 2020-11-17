import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}
  public create(name: string) {
    return this.repository.save(
      new User({
        name: name,
      })
    );
  }
  public getUsers() {
    return this.repository.find();
  }
}
