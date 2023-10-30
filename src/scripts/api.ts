export const fetchApi = async (endpoint: string): Promise<any> => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};
