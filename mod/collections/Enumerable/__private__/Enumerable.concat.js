/// <reference types="./Enumerable.concat.d.ts" />

import Enumerable_concatMany from "./Enumerable.concatMany.js";
const Enumerable_concat = ((...enumerables) => Enumerable_concatMany(enumerables));
export default Enumerable_concat;
