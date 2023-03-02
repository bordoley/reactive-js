/// <reference types="./Enumerable.encodeUtf8.d.ts" />

import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Enumerable_defer from "./Enumerable.defer.js";
const map = Observable_map;
const Enumerable_encodeUtf8 = 
/*@__PURE__*/ Container_encodeUtf8(Enumerable_defer, map);
export default Enumerable_encodeUtf8;
