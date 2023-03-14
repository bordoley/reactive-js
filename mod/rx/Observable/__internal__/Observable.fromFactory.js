/// <reference types="./Observable.fromFactory.d.ts" />

import Container_fromFactory from "../../../containers/Container/__internal__/Container.fromFactory.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import Observable_map from "./Observable.map.js";
const Observable_fromFactory = 
/*@__PURE__*/ Container_fromFactory(Optional_toObservable, Observable_map);
export default Observable_fromFactory;
