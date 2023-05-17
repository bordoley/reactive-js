/// <reference types="./Enumerator.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
import Enumerator_everySatisfy from "./Enumerator.everySatisfy.js";
const Enumerator_noneSatisfy = (predicate) => Enumerator_everySatisfy(compose(predicate, negate));
export default Enumerator_noneSatisfy;
