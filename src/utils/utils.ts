export function convertBigInt(data) {
  return JSON.parse(
    JSON.stringify(
      data,
      (_, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    ),
  );
}
