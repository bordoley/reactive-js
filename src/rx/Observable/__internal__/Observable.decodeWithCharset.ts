import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __DEV__ } from "../../../constants.js";
import { DecodeWithCharset } from "../../../containers.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_decodeWithCharsetMixin from "../../Sink/__internal__/Sink.decodeWithCharsetMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

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
        props<unknown>({}),
        Observer_decorateNotifyForDev(typedDecodeWithCharsetMixin),
      ),
    );

    return pipe(
      createDecodeWithCharsetObserver,
      StatefulContainer_decodeWithCharset<ObservableLike>(
        Observable_liftEnumerableOperator,
      ),
    );
  })();

export default Observable_decodeWithCharset;
