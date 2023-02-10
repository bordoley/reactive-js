import { createInstanceFactory } from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_decodeWithCharsetMixin from "../../Sink/__internal__/Sink.decodeWithCharsetMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(
      ReadonlyArray_toRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      StatefulContainer_decodeWithCharset(Runnable_liftT),
    );
  })();

export default Runnable_decodeWithCharset;
