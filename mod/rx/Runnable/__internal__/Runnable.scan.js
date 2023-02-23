/// <reference types="./Runnable.scan.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { pipe } from "../../../functions.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = Sink_scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), StatefulContainer_scan(Runnable_lift));
})();
export default Runnable_scan;
