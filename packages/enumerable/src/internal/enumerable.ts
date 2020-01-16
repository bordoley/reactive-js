import { EnumerableLike } from "./interfaces";

export const isEnumerable = (
  arg: unknown,
): arg is EnumerableLike<unknown, any> => (arg as any).enumerate !== undefined;
