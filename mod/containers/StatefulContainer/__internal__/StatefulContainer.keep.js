/// <reference types="./StatefulContainer.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_keep = (lift) => (operator) => (predicate) => pipe(operator, partial(predicate), lift);
export default StatefulContainer_keep;
