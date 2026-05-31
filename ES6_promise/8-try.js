// Divides two numbers, throws error if denominator is 0
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by 0');
  return numerator / denominator;
}