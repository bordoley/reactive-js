/// <reference types="./IndexedCollection.keySet.d.ts" />

import Observable_toReadonlySet from "../../Observable/__internal__/Observable.toReadonlySet.js";
import { compose } from "../../functions.js";
import IndexedCollection_keys from "./IndexedCollection.keys.js";
const IndexedCollection_keySet = (() => compose(IndexedCollection_keys(), Observable_toReadonlySet()));
export default IndexedCollection_keySet;
