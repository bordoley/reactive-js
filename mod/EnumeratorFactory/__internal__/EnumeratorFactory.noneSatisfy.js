/// <reference types="./EnumeratorFactory.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
import EnumeratorFactory_everySatisfy from "./EnumeratorFactory.everySatisfy.js";
const EnumeratorFactory_noneSatisfy = (predicate) => EnumeratorFactory_everySatisfy(compose(predicate, negate));
export default EnumeratorFactory_noneSatisfy;
