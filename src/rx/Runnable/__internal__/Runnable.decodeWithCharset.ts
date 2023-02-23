import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { DecodeWithCharset } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_decodeWithCharsetMixin from "../../Sink/__internal__/Sink.decodeWithCharsetMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(
      ReadonlyArray_toRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      StatefulContainer_decodeWithCharset(Runnable_lift),
    );
  })();

export default Runnable_decodeWithCharset;
