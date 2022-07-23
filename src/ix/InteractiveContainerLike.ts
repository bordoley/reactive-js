import { Container, ContainerOf } from "../containers/ContainerLike";
import {
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../containers/StatefulContainerLike";
import { InteractiveSourceLike } from "./InteractiveSourceLike";

export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike extends StatefulContainerLike {
  readonly TStatefulContainerState?: InteractiveSourceLike;
  readonly TCtx?: unknown;

  [InteractiveContainerLike_interact](
    _: this["TCtx"],
  ): StatefulContainerStateOf<InteractiveContainerLike, this["T"]>;
}

export type InteractiveContainerCtxOf<
  C extends InteractiveContainerLike,
  T,
> = C extends {
  readonly TCtx?: unknown;
}
  ? NonNullable<
      (C & {
        readonly T: T;
      })["TCtx"]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export interface CreateInteractiveContainer<C extends InteractiveContainerLike>
  extends Container<C> {
  create<T>(
    source: (ctx: C["TCtx"]) => StatefulContainerStateOf<C, T>,
  ): ContainerOf<C, T>;
}
