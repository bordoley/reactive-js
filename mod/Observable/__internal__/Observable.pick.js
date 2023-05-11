/// <reference types="./Observable.pick.d.ts" />

import Container_pick from "../../Container/__internal__/Container.pick.js";
import Observable_map from "./Observable.map.js";
const Observable_pick = 
/*@__PURE__*/ Container_pick(
// Using a type cast to work around the fact that ObservableLike isn't a Container
Observable_map);
export default Observable_pick;
