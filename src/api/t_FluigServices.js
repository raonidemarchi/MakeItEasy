import { getResponseDetails } from '../config/utils';

export default checkConnection = async (fluigAddress) => {
  const route = '/webdesk/ECMCompanyService?wsdl';
  const responseDetails = await getResponseDetails(fluigAddress + route);

  return responseDetails.status === 200;
}
