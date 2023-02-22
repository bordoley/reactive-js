/// <reference types="./StatefulContainer.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_throwIfEmpty = (m) => (operator) => (factory) => pipe(operator, partial(factory), StatefulContainer_lift(m));
export default StatefulContainer_throwIfEmpty;
