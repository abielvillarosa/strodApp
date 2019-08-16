require('dotenv').config()

const config = {
  api: {
    host: process.env.API_HOST,
    timeout: 20000
  }
};

const API_HOST = config.api.host;

export {
  API_HOST
}

export default config