import { createInstanceFactory } from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import StatefulContainer$decodeWithCharset from "../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$decodeWithCharsetMixin from "../Sink/Sink.decodeWithCharsetMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink$decodeWithCharsetMixin(
      ReadonlyArray$toRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      StatefulContainer$decodeWithCharset(Runnable$liftT),
    );
  })();

export default Runnable$decodeWithCharset;
