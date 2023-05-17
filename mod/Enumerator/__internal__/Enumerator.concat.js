/// <reference types="./Enumerator.concat.d.ts" />

import Enumerator_concatMany from "./Enumerator.concatMany.js";
const Enumerator_concat = (...enumerators) => Enumerator_concatMany(enumerators);
export default Enumerator_concat;
