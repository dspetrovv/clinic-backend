import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Specialty } from '../specialties/specialty.entity';

export default class CreateSpecialties implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Specialty)
      .values([
        {
          name: 'Главврач',
          description:
            'Осуществляет руководство деятельностью медицинской организации',
        },
      ])
      .execute();
  }
}
