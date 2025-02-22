/// <reference types="./Deferable.concat.d.ts" />

import Deferable_concatMany from "./Deferable.concatMany.js";
const Deferable_concat = (...computations) => Deferable_concatMany(computations);
export default Deferable_concat;
