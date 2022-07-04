import { AbstractDisposableContainer, ContainerLike } from "./container";
import { Disposable } from "./disposable";
import { raise } from "./functions";

export interface LiftableLike extends ContainerLike {
  readonly TLiftableState: Disposable & ContainerLike;
}

export type LiftableStateOf<C extends LiftableLike, T> = C extends {
  readonly TLiftableState: unknown;
}
  ? (C & {
      readonly T: T;
    })["TLiftableState"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export abstract class AbtractDisposableLiftable<
    TState extends Disposable & ContainerLike,
  >
  extends AbstractDisposableContainer
  implements LiftableLike
{
  get TLiftableState(): TState {
    return raise();
  }
}
