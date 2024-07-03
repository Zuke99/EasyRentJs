import mongoose from 'mongoose';
import { dbConfig as config } from '../configs';
import connect from './connection';

const openConnection = connect({ mongoose, config });

export {
    openConnection
};