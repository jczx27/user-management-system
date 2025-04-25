import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
const certPath = join(__dirname, './cert.pem');
ConfigModule.forRoot().catch((e) => {
  console.log('Failed to connect to database: ', process.env.MONGO_DB_NAME);
  console.log(e);
}); // Load .env variables

export const DatabaseConfig = MongooseModule.forRoot(
  `${process.env.MONGO_URI || 'mongodb+srv://cluster0.bbatx.mongodb.net/'}${process.env.MONGO_DB_NAME}?${process.env.MONGO_AUTH}`,
  { tlsCertificateKeyFile: certPath },
);
