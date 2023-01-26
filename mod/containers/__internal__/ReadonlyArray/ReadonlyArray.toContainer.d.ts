import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const ReadonlyArray_toContainer: <C, T, O extends {
    readonly start: number;
    readonly count: number;
} = {
    readonly start: number;
    readonly count: number;
}>(factory: (values: readonly T[], start: number, count: number, options?: Partial<O> | undefined) => C) => (options?: Partial<O>) => Function1<ReadonlyArrayLike<T>, C>;
export { ReadonlyArray_toContainer as default };
