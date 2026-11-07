export function page(items, number, size) {
  const start = number * size;
  return items.slice(start, start + size);
}
