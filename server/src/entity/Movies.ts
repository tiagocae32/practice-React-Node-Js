import { Entity,Column,PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
    pais_origen: string;
    
    @Column()
    fecha_estreno: string;

    @Column()
    director: string;

    @Column()
    link_imagen: string;

    /*
    @Column()
    reparto:
    */
}




