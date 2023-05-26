/// <reference types="./IndexedCollection.toObservable.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import { pipe } from "../../functions.js";
import IndexedCollection_enumerate from "./IndexedCollection.enumerate.js";
const IndexedCollection_toObservable = (options) => (c) => Enumerable_create(() => pipe(c, IndexedCollection_enumerate(options)));
export default IndexedCollection_toObservable;
