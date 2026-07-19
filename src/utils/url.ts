const BASE = import.meta.env.BASE_URL || '/';

export function getUrl(path: string) {
  if (!path) return path
  if (path.startsWith(BASE)) return path
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${BASE}${clean}`
}

export { BASE as baseUrl }
