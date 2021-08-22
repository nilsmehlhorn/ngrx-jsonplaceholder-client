export const normalize = <T>(
  entities: T[],
  keySelector: (entity: T) => number
) => {
  const normalized: { [key: number]: T } = {};
  entities.forEach((entity) => (normalized[keySelector(entity)] = entity));
  return normalized;
};
