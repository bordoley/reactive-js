import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer_decodeWithCharset from "../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_decodeWithCharsetMixin from "../Sink/Sink.decodeWithCharsetMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(
      ReadonlyArray_toRunnableObservable(),
    );
    const typedObserverMixin = Observer_mixin<ArrayBuffer>();

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
      StatefulContainer_decodeWithCharset<ObservableLike, TReactive>(
        Observable_liftEnumerableOperatorT,
      ),
    );
  })();

export default Observable_decodeWithCharset;
