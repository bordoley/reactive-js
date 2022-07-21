import { StatefulContainerLike, StatefulContainerStateOf } from '../containers/StatefulContainerLike.js';
import { InteractiveSourceLike } from "./InteractiveSourceLike.mjs";
declare const InteractiveContainerLike_interact: unique symbol;
interface InteractiveContainerLike extends StatefulContainerLike {
    readonly TStatefulContainerState?: InteractiveSourceLike;
    readonly TCtx?: unknown;
    [InteractiveContainerLike_interact](_: this["TCtx"]): StatefulContainerStateOf<InteractiveContainerLike, this["T"]>;
}
declare type InteractiveContainerCtxOf<C extends InteractiveContainerLike, T> = C extends {
    readonly TCtx?: unknown;
} ? NonNullable<(C & {
    readonly T: T;
})["TCtx"]> : {
    readonly _C: C;
    readonly _T: () => T;
};
export { InteractiveContainerCtxOf, InteractiveContainerLike, InteractiveContainerLike_interact };
