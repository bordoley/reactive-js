import { ReadonlyArrayLike, ToReadonlyArray } from "../../../keyed-containers.js";
declare const ReadonlyArray_toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export default ReadonlyArray_toReadonlyArray;
