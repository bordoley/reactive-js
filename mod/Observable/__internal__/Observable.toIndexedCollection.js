/// <reference types="./Observable.toIndexedCollection.d.ts" />

import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import Observable_toReadonlyArray from "./Observable.toReadonlyArray.js";
const Observable_toIndexedCollection = () => compose(Observable_toReadonlyArray(), ReadonlyArray_toIndexedCollection());
export default Observable_toIndexedCollection;
