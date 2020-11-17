import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'wow'
})
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    default: 1
  })
  event: number;

  @Column({
    default: 1
  })
  event2: number;

}
