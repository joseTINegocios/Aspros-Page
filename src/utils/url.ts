const RAW = String(import.meta.env.BASE_URL || '/')
const BASE = RAW.endsWith('/') ? RAW : RAW + '/';

export function getUrl(path: string) {
  if (!path) return path
  if (path.startsWith(BASE)) return path
  if (path.startsWith(RAW)) return path.replace(RAW, BASE)
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${BASE}${clean}`
}

export { BASE as baseUrl }
