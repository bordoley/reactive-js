import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers.js";
declare const ReadonlyArray_toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export default ReadonlyArray_toReadonlyArray;
