/// <reference types="./Optional.toReadonlyArray.d.ts" />

import { isSome } from "../../../functions.js";
const Optional_toReadonlyArray = () => (optional) => isSome(optional) ? [optional] : [];
export default Optional_toReadonlyArray;
