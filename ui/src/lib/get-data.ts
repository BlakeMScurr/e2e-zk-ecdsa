export async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 12 } })

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}
