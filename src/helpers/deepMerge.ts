/**
 * Deeply merges two objects or arrays.
 * @param a The first object or array to merge.
 * @param b The second object or array to merge.
 * @returns A new object or array that is the result of the merge.
 */
export function deepMerge(a, b) {
  if(Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }

  // checks if both types match
  if (Array.isArray(a) || Array.isArray(b) || typeof a !== typeof b) {
    throw new Error('Error: cannot merge two different types');
  }

  const merged = { ...a };
  for (const key of Object.keys(b)) {
    if (typeof a[key] === 'object' || Array.isArray(a[key]))
      merged[key] = deepMerge(a[key], b[key]);
    else
      merged[key] = b[key];
  }
  return merged;
}