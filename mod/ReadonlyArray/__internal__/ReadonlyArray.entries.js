/// <reference types="./ReadonlyArray.entries.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyArray_entries = () => (arr) => {
    const count = arr.length;
    function* ReadonlyArrayEntries() {
        for (let i = 0; i < count; i++) {
            yield [i, arr[i]];
        }
    }
    return Enumerable_create(() => pipe(ReadonlyArrayEntries(), Iterator_enumerate()));
};
export default ReadonlyArray_entries;
