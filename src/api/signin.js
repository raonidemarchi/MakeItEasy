import { postJson } from '../config/utils';
import { endpoint } from '../config/globals';

export default tryToAuthenticate = async (email, pass) => {
  const route = '/loginRoutes/signin';

  return await postJson(endpoint + route, {
    email,
    pass,
  });
}
