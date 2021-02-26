import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const config = {
  api: {
    uri: 'http://localhost:4000',
  },
};

export const axiosInstance = axios.create({
  baseURL: config.api.uri,
});

export const mock = new MockAdapter(
  axiosInstance,
  { onNoMatch: 'passthrough' },
);
