//This file defines the connection details for database
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const ormConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5434,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/**/*.entity.{ts,js}'],
};
module.exports = ormConfig;

