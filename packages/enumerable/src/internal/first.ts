import { EnumerableLike } from "./interfaces"

export const first = <T>(enumerable: EnumerableLike<void, T>): T | undefined => {
  const enumerator = enumerable.enumerate();
  return enumerator.move()
    ? enumerator.current
    : undefined;
}