import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const hashedPassword = await bcrypt.hash('0000', 12);

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin.com',
          password: hashedPassword,
          roleId: 1,
        },
      ])
      .execute();
  }
}
