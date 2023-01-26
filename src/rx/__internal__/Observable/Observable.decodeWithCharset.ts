import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DecodeWithCharset } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer$decodeWithCharset from "../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$decodeWithCharsetMixin from "../Sink/Sink.decodeWithCharsetMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink$decodeWithCharsetMixin(
      ReadonlyArray$toRunnableObservable(),
    );
    const typedObserverMixin = Observer$mixin<ArrayBuffer>();

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
      StatefulContainer$decodeWithCharset<ObservableLike, TReactive>(
        Observable$liftEnumerableOperatorT,
      ),
    );
  })();

export default Observable$decodeWithCharset;
