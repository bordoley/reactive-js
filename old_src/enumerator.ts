import { Function1, SideEffect1 } from "./functions";
import { InteractiveSourceLike } from "./interactiveSource";

export interface EnumeratorLike<T> extends InteractiveSourceLike {
  readonly current: T;
  readonly hasCurrent: boolean;

  move(): boolean;
}

export const getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
  enumerator.current;

export const hasCurrent = <T>(enumerator: EnumeratorLike<T>) =>
  enumerator.hasCurrent;

export const move = <T>(enumerator: EnumeratorLike<T>) => enumerator.move();

export const forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (move(enumerator)) {
      f(getCurrent(enumerator));
    }
    return enumerator;
  };
