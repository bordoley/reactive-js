import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainer$takeFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$takeFirstMixin from "../../__internal__/Sink/Sink.takeFirstMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeFirstSinkMixin = Sink$takeFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeFirstSinkMixin),
      StatefulContainer$takeFirst<RunnableLike, T, TReactive>(Runnable$liftT),
    );
  })();

export default Runnable$takeFirst;
