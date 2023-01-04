import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import StatefulContainerLike__decodeWithCharset from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__decodeWithCharsetMixin from "../SinkLike/SinkLike.decodeWithCharsetMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(
      ReadonlyArrayLike__toRunnableObservable(),
    );
    const typedObserverMixin = ObserverLike__mixin<ArrayBuffer>();

    const createDecodeWithCharsetObserver = createInstanceFactory(
      mix(
        include(typedObserverMixin, typedDecodeWithCharsetMixin),
        function DecodeWithCharsetObserver(
          instance: unknown,
          delegate: ObserverLike<string>,
          charset: string,
        ): ObserverLike<ArrayBuffer> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedDecodeWithCharsetMixin, instance, delegate, charset);

          return instance;
        },
      ),
    );

    return pipe(
      createDecodeWithCharsetObserver,
      StatefulContainerLike__decodeWithCharset<ObservableLike, TReactive>(
        ObservableLike__liftEnumerableOperatorT,
      ),
    );
  })();

export default ObservableLike__decodeWithCharset;
