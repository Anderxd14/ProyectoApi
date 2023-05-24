require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV ==='postgresql://postgres:6D2CFZmrFQlbYWcUEY0U@containers-us-west-163',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  spEmail:process.env.SP_EMAIL,
  spPasswor:process.env.SP_PASSWORD
}

module.exports = { config };