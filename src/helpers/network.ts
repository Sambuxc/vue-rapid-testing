
export async function getPostBody(id: number) {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1',
  ).then(res => res.json())

  return data.body
}