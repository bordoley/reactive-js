/// <reference types="./Container.noneSatisfy.d.ts" />

import { compose, negate } from "../../../functions.js";
const Container_noneSatisfy = (everySatisfy) => (predicate) => everySatisfy(compose(predicate, negate));
export default Container_noneSatisfy;
