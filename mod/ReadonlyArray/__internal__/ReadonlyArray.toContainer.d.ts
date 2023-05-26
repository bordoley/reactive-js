import { Function1 } from "../../functions.js";
import { Container, ContainerOf } from "../../types.js";
declare const ReadonlyArray_toContainer: <C extends Container>(factory: <T>(values: readonly T[], start: number, count: number) => ContainerOf<C, T>) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<readonly T_1[], ContainerOf<C, T_1>>;
export default ReadonlyArray_toContainer;
