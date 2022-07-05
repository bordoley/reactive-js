import { Disposable } from "./disposable";
import { Function1, SideEffect1, raise } from "./functions";
import { SourceLike } from "./source";

export abstract class Enumerator<T>
  extends Disposable
  implements SourceLike<T>
{
  get T(): T {
    return raise();
  }

  get TContainerOf(): this {
    return this;
  }

  abstract get current(): T;
  abstract get hasCurrent(): boolean;

  abstract move(): boolean;
}

export const getCurrent = <T>(enumerator: Enumerator<T>): T =>
  enumerator.current;

export const hasCurrent = <T>(enumerator: Enumerator<T>) =>
  enumerator.hasCurrent;

export const move = <T>(enumerator: Enumerator<T>) => enumerator.move();

export const forEach =
  <T, TEnumerator extends Enumerator<T> = Enumerator<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (move(enumerator)) {
      f(getCurrent(enumerator));
    }
    return enumerator;
  };
