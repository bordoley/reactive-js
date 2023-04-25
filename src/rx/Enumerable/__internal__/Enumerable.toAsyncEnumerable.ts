import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../containers.js";
import {
  bindMethod,
  invoke,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  AsyncEnumerableLike,
  StreamLike,
  StreamableLike_stream,
  ToAsyncEnumerable,
} from "../../../streaming.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toAsyncEnumerable: ToAsyncEnumerable<
  EnumerableLike,
  { delay?: number }
>["toAsyncEnumerable"] = (<T>() =>
  returns(
    createInstanceFactory(
      mix(
        include(Delegating_mixin()),
        function EnumerableToAsyncEnumerable(
          instance: AsyncEnumerableLike<T>,
          delegate: EnumerableLike<T>,
        ): AsyncEnumerableLike<T> {
          init(Delegating_mixin(), instance, delegate);
          return instance;
        },
        props({}),
        {
          get [ObservableLike_isEnumerable](): boolean {
            unsafeCast<DelegatingLike<EnumerableLike<T>>>(this);
            return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
          },

          get [ObservableLike_isRunnable](): boolean {
            unsafeCast<DelegatingLike<EnumerableLike<T>>>(this);
            return this[DelegatingLike_delegate][ObservableLike_isRunnable];
          },

          [ObservableLike_observe](
            this: DelegatingLike<EnumerableLike<T>>,
            observer: ObserverLike<T>,
          ) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
          },

          [StreamableLike_stream](
            this: DelegatingLike<EnumerableLike<T>>,
            scheduler: SchedulerLike,
            options?: {
              readonly replay?: number;
              readonly capacity?: number;
              readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            },
          ): StreamLike<void, T> & DisposableLike {
            const op = (observable: ObservableLike<void>) =>
              Observable_create(observer => {
                const enumerator = pipe(
                  this[DelegatingLike_delegate],
                  Enumerable_enumerate<T>(),
                  Disposable_addTo(observer),
                );

                pipe(
                  observable,
                  Observable_forEach<ObservableLike, void>(
                    bindMethod(enumerator, EnumeratorLike_move),
                  ),
                  Observable_takeWhile<ObservableLike, void>(
                    _ => enumerator[EnumeratorLike_hasCurrent],
                  ),

                  Observable_map<ObservableLike, void, T>(
                    _ => enumerator[EnumeratorLike_current],
                  ),
                  invoke(ObservableLike_observe, observer),
                );
              });

            return Stream_create<void, T>(op, scheduler, options);
          },
        },
      ),
    ),
  ))();

export default Enumerable_toAsyncEnumerable;
