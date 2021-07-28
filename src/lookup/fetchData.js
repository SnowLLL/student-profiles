export async function fetchData(url) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'force-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  }