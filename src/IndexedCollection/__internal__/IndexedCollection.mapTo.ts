import type * as IndexedCollection from "../../IndexedCollection.js";
import { returns } from "../../functions.js";
import IndexedCollection_map from "./IndexedCollection.map.js";

const IndexedCollection_mapTo: IndexedCollection.Signature["mapTo"] = <T>(
  v: T,
) => IndexedCollection_map(returns(v));

export default IndexedCollection_mapTo;
