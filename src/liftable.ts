import { ContainerLike } from "./container";
import { Disposable } from "./disposable";

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
