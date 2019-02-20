import { getResponseDetails } from '../config/utils';

export default checkConnection = async (fluigAddress) => {
  const route = '/webdesk/ECMCompanyService?wsdl';
  const responseDetails = await getResponseDetails(fluigAddress + route);

  return responseDetails;
}

export default loginFluig = async (colleagueId = 'raoni.demarchi', password = 'r15210986') => {
  const route = '/webdesk/ECMColleagueService?wsdl';

  return await postJson(endpoint + route, {
    companyId: 1,
    colleagueId,
    password,
  });
}
