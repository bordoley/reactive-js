/// <reference types="./Observable.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
const Observable_noneSatisfy = (predicate) => Observable_everySatisfy(compose(predicate, negate));
export default Observable_noneSatisfy;
