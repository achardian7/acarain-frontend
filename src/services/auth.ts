import instance from '@/libs/axios/instance';
import { IRegister } from '@/types/auth';

import endpoint from './endpoint.constant';

const authService = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
};

export default authService;
