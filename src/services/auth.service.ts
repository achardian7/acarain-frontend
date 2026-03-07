import instance from '@/libs/axios/instance';
import { IActivationCode, IRegister } from '@/types/auth';

import endpoint from './endpoint.constant';

const authService = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: IActivationCode) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
};

export default authService;
