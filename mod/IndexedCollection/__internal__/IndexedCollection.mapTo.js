/// <reference types="./IndexedCollection.mapTo.d.ts" />

import { returns } from "../../functions.js";
import IndexedCollection_map from "./IndexedCollection.map.js";
const IndexedCollection_mapTo = (v) => IndexedCollection_map(returns(v));
export default IndexedCollection_mapTo;
