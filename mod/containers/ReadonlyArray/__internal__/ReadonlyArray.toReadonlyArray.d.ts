import { ToReadonlyArray, ReadonlyArrayLike } from "../../../containers.js";
declare const ReadonlyArray_toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export { ReadonlyArray_toReadonlyArray as default };
