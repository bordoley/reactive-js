/// <reference types="./IndexedCollection.toEventSource.d.ts" />

import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import { compose } from "../../functions.js";
import IndexedCollection_toIterable from "./IndexedCollection.toIterable.js";
const IndexedCollection_toEventSource = (options) => compose(IndexedCollection_toIterable(options), Iterable_toEventSource());
export default IndexedCollection_toEventSource;
