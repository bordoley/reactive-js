import { ReadonlyArrayLike } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
declare type ToContainerOptions = {
    readonly start: number;
    readonly count: number;
};
declare const ReadonlyArrayLike__toContainer: <C, T>(factory: (values: readonly T[], start: number, count: number) => C) => (options?: Partial<ToContainerOptions>) => Function1<ReadonlyArrayLike<T>, C>;
export { ToContainerOptions, ReadonlyArrayLike__toContainer as default };
