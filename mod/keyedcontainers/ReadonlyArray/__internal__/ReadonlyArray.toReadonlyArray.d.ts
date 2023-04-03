import { ReadonlyArrayLike, ToReadonlyArray } from "../../../keyedcontainers.js";
declare const ReadonlyArray_toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export default ReadonlyArray_toReadonlyArray;
