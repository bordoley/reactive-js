/// <reference types="./ReadonlyArray.last.d.ts" />

import { none } from "../../../functions.js";
const ReadonlyArray_last = () => (values) => {
    const count = values.length;
    return count > 0 ? values[count - 1] : none;
};
export default ReadonlyArray_last;
