/// <reference types="./Runnable.decodeWithCharset.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.js";
import { pipe } from "../../../functions.js";
import Sink_decodeWithCharsetMixin from "../../Sink/__internal__/Sink.decodeWithCharsetMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";
const Runnable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainer_decodeWithCharset(Runnable_liftT));
})();
export default Runnable_decodeWithCharset;
