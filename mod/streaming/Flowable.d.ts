import { ToObservable, ObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { FromReadonlyArray } from "../containers.js";
import { FlowableLike } from "../streaming.js";
declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
/** @ignore */
declare const Flowable: {
    fromReadonlyArray: <T>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T[], FlowableLike<T>>;
    toObservable: <T_1>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<FlowableLike<T_1>, ObservableLike<T_1>>;
};
export { Flowable as default, fromReadonlyArray, toObservable };
