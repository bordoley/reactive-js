/// <reference types="./ReadonlyArray.lastAsync.d.ts" />

import { none } from "../../functions.js";
const ReadonlyArray_lastAsync = () => (values) => {
    const count = values.length;
    return Promise.resolve(count > 0 ? values[count - 1] : none);
};
export default ReadonlyArray_lastAsync;
