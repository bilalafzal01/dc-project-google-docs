module.exports = (handler) => {
  return async (args, req) => {
    try {
      return await handler(args, req);
    } catch (err) {
      console.log(err);
      return err;
      // optionally log error - on winston
    }
  };
};
