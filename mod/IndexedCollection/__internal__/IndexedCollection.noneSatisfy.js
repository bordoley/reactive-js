/// <reference types="./IndexedCollection.noneSatisfy.d.ts" />

import { compose, negate } from "../../functions.js";
import IndexedCollection_everySatisfy from "./IndexedCollection.everySatisfy.js";
const IndexedCollection_noneSatisfy = (predicate) => IndexedCollection_everySatisfy(compose(predicate, negate));
export default IndexedCollection_noneSatisfy;
