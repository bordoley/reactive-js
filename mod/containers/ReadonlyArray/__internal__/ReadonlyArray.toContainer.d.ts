import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const ReadonlyArray_toContainer: <C, T, O extends {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} = {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}>(factory: (values: readonly T[], start: number, count: number, options?: O | undefined) => C) => (options?: O | undefined) => Function1<ReadonlyArrayLike<T>, C>;
export { ReadonlyArray_toContainer as default };
