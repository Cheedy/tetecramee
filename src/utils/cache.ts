interface CacheItem<T> {
  data: T;
  expiry: number;
}

const CACHE_DURATION = 60 * 60 * 1000; // 1 heure en millisecondes

export function setCache<T>(key: string, data: T): void {
  const item: CacheItem<T> = {
    data,
    expiry: Date.now() + CACHE_DURATION,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getCache<T>(key: string): T | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item: CacheItem<T> = JSON.parse(itemStr);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.data;
}