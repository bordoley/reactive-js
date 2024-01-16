/// <reference types="./ReadonlyArray.map.d.ts" />

import { Array_map } from "../../../__internal__/constants.js";
const ReadonlyArray_map = (selector) => (arr) => arr[Array_map](selector);
export default ReadonlyArray_map;
