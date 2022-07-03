import { AbstractDisposableContainer, ContainerLike } from "./container";
import { Disposable } from "./disposable";
import { raise } from "./functions";

export interface LiftableStateLike extends Disposable, ContainerLike {}

export interface LiftableLike extends ContainerLike {
  readonly TLiftableState: LiftableStateLike;
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
    TState extends LiftableStateLike,
  >
  extends AbstractDisposableContainer
  implements LiftableLike
{
  get TLiftableState(): TState {
    return raise();
  }
}
