import { Predicate, compose, negate } from "../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import IndexedCollection_everySatisfy from "./IndexedCollection.everySatisfy.js";

const IndexedCollection_noneSatisfy: IndexedCollection.Signature["noneSatisfy"] =
  <T>(predicate: Predicate<T>) =>
    IndexedCollection_everySatisfy<T>(compose(predicate, negate));

export default IndexedCollection_noneSatisfy;
