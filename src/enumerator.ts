import { AbstractDisposableContainer, ContainerLike } from "./container";
import { Function1, SideEffect1 } from "./functions";

export abstract class Enumerator<T>
  extends AbstractDisposableContainer
  implements ContainerLike
{
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
