import { createInstanceFactory } from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import StatefulContainerLike__decodeWithCharset from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__decodeWithCharsetMixin from "../SinkLike/SinkLike.decodeWithCharsetMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(
      ReadonlyArrayLike__toRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      StatefulContainerLike__decodeWithCharset(RunnableLike__liftT),
    );
  })();

export default RunnableLike__decodeWithCharset;
