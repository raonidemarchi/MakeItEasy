import post from '../config/utils';
import { endpoint } from '../config/globals';

export default tryToAuthenticate = async (email, pass) => {
  const route = '/loginRoutes/signin';

  return await post(endpoint + route, {
    email,
    pass,
  });
}
