/// <reference types="./ReadonlyArray.fromOptional.d.ts" />

import { isSome } from "../../functions.js";
const ReadonlyArray_fromOptional = () => (optional) => isSome(optional) ? [optional] : [];
export default ReadonlyArray_fromOptional;
