export const myworker = async prefix => {
  console.log('worker: ping');

  return ['1', '2', '3', '4', '5'].map(n => `${prefix}-${n}`);
};
