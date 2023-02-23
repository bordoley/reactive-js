/// <reference types="./Runnable.skipFirst.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_skipFirst = 
/*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = Sink_skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), StatefulContainer_skipFirst(Runnable_lift));
})();
export default Runnable_skipFirst;
