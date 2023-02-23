/// <reference types="./StatefulContainer.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_throwIfEmpty = (lift) => (operator) => (factory) => pipe(operator, partial(factory), lift);
export default StatefulContainer_throwIfEmpty;
