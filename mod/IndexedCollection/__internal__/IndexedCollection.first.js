/// <reference types="./IndexedCollection.first.d.ts" />

import { KeyedCollectionLike_get } from "../../types.js";
const IndexedCollection_first = () => (values) => values[KeyedCollectionLike_get](0);
export default IndexedCollection_first;
