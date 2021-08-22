export const isUndefined = (value: unknown): value is undefined =>
  value == null;

export const isDefined = <T>(value: T | undefined): value is T =>
  !isUndefined(value);
