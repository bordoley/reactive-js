export type Option<T> = T | undefined;

export const none = undefined;

export const isSome = <T>(option: Option<T>): option is T => option !== none;

export const isNone = <T>(option: Option<T>): option is undefined =>
  option === none;
