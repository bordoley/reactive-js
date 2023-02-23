/// <reference types="./Runnable.map.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { pipe } from "../../../functions.js";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = Sink_mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), StatefulContainer_map(Runnable_lift));
})();
export default Runnable_map;
