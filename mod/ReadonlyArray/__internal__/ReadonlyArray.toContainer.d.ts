import { Container } from "../../containers.js";
import { Function1 } from "../../functions.js";
declare const ReadonlyArray_toContainer: <C extends Container.Type, O extends unknown = unknown>(factory: <T>(values: readonly T[], start: number, count: number, options?: O | undefined) => Container.Of<C, T>) => <T_1>(options?: (O & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T_1[], Container.Of<C, T_1>>;
export default ReadonlyArray_toContainer;
