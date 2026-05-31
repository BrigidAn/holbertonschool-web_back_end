// Returns true if all array elements exist in the set
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}