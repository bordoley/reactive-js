/// <reference types="./IndexedCollection.flow.d.ts" />

import Observable_flow from "../../Observable/__internal__/Observable.flow.js";
import { compose } from "../../functions.js";
import IndexedCollection_toObservable from "./IndexedCollection.toObservable.js";
const IndexedCollection_flow = (scheduler, options) => compose(IndexedCollection_toObservable(options), Observable_flow(scheduler, options));
export default IndexedCollection_flow;
