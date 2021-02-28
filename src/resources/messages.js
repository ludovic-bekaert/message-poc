import { axiosInstance, mock } from './config';
import messagesMock from './mock/messages';

const config = { mock: true };

export const getMessagesList = () => axiosInstance.get('/messages');
export const postMessage = (data) => axiosInstance.post('/messages', data);

if (config.mock) {
  mock.onGet('/messages').reply(() => ([
    200,
    messagesMock,
  ]));

  mock.onPost('/messages').reply(({ data }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, data]);
    }, 2000);
  }));
}