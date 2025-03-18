/// <reference types="./Runnable.map.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_map = /*@__PURE__*/ (() => {
    const createMapEventListener = mixInstanceFactory(include(LiftedSinkMixin(), MapMixin()), function MapEventListener(delegate, selector) {
        init(LiftedSinkMixin(), this, delegate, none);
        init(MapMixin(), this, selector);
        return this;
    });
    return (selector) => pipe(createMapEventListener, partial(selector), Runnable_lift);
})();
export default Runnable_map;
