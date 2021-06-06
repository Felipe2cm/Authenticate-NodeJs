import "reflect-metadata";
import {createConnection} from 'typeorm';
import { Usuario } from '../models/usuario';
import * as path from 'path';

createConnection({
    type: "sqlite",
    database: `${path.resolve(__dirname, '../../dbAutentication.db')}`,    
    entities: [ Usuario],
    logging: false,
    synchronize: false    
  });

