/// <reference types="./IndexedCollection.enumerate.d.ts" />

import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { compose } from "../../functions.js";
import IndexedCollection_toIterable from "./IndexedCollection.toIterable.js";
const IndexedCollection_enumerate = options => compose(IndexedCollection_toIterable(options), Iterable_enumerate());
export default IndexedCollection_enumerate;
