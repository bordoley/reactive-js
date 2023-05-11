/// <reference types="./Runnable.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";
const Runnable_noneSatisfy = (predicate) => Runnable_everySatisfy(compose(predicate, negate));
export default Runnable_noneSatisfy;
