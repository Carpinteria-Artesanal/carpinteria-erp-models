module.exports = async (mongoose, uri, options) => {
  mongoose.connect(uri, options);

  mongoose.connection.once('connected', () => {
    console.log('[carpinteria-erp-models] Mongoose connected');
  });

  mongoose.connection.once('error', (err) => {
    console.log('[carpinteria-erp-models] Mongoose error: ', err);
    throw err;
  });

  mongoose.connection.once('disconnected', () => {
    console.log('[carpinteria-erp-models] Mongoose disconnected');
  });

  process.once('SIGINT', () => mongoose.connection.close(() => {
    console.error('[carpinteria-erp-models] Mongoose disconnected');
    process.exit(0);
  }));
};
