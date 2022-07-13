import {
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../containers/StatefulContainerLike";
import { InteractiveSourceLike } from "./InteractiveSourceLike";

export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike<T = unknown>
  extends StatefulContainerLike<T> {
  readonly TStatefulContainerState?: InteractiveSourceLike;
  readonly TCtx?: unknown;

  [InteractiveContainerLike_interact](
    _: this["TCtx"],
  ): StatefulContainerStateOf<InteractiveContainerLike, T>;
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
