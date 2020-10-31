import jwt from 'jsonwebtoken';
import config from './config';
export const getJsonToken=(user)=>jwt.sign({ foo: 'bar' }, 'shhhhh');


