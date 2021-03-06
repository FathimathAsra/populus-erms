const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "New secret key",
    dbUri: process.env.POPULUS_DB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/populus'
  }
  
  export default config