import { Function1 } from "../../functions.js";
import { Container, Containers } from "../../types.js";
declare const ReadonlyArray_toContainer: <C extends Container, O extends unknown = unknown>(factory: <T>(values: readonly T[], start: number, count: number, options?: O | undefined) => Containers.Of<C, T>) => <T_1>(options?: (O & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T_1[], Containers.Of<C, T_1>>;
export default ReadonlyArray_toContainer;
