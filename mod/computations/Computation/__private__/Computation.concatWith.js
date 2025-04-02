/// <reference types="./Computation.concatWith.d.ts" />

const Computation_concatWith = (m, ...tail) => (fst) => m.concat(fst, ...tail);
export default Computation_concatWith;
