/// <reference types="./Runnable.keep.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { pipe } from "../../../functions.js";
import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = Sink_keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), StatefulContainer_keep(Runnable_lift));
})();
export default Runnable_keep;
