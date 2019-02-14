export const postJson = async (endpoint, body, headers) => {
  let response = {};
  let responseJson = {};
  const requestHeaders = headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    });

    responseJson = await response.json();
  } catch(error) {
    responseJson = {
      error: true,
      data: error,
    };
  }

  return responseJson;
}

export const getJson = async (endpoint) => {
  let response = {};
  let responseJson = {};

  try {
    response = await fetch(endpoint);
    responseJson = await response.json();
  } catch(error) {
    responseJson = {
      error: true,
      data: error,
    };
  }

  return responseJson;
}

export const getResponseDetails = async (endpoint) => {
  let responseJson = {};

  try {
    responseJson = await fetch(endpoint);
  } catch(error) {
    responseJson = {
      error: true,
      data: error,
    };
  }

  return responseJson;
}
