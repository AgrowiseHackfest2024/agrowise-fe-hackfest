export default async function fetcher(url: string, token?: string) {
  return fetch(url, {
    headers: {
      authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
}
