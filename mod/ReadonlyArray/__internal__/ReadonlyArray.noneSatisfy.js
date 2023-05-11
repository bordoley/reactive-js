/// <reference types="./ReadonlyArray.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
const ReadonlyArray_noneSatisfy = (predicate) => arr => arr.every(compose(predicate, negate));
export default ReadonlyArray_noneSatisfy;
