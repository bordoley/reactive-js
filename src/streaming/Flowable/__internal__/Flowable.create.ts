import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, pipe, bindMethod, none } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import { FlowableLike, StreamableLike_stream } from "../../../streaming.js";
import {
  BufferLike_capacity,
  QueueableLike_backpressureStrategy,
  DispatcherLike_complete,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_sinkInto from "../../Streamable/__internal__/Streamable.sinkInto.js";
import FlowableStream_create from "./FlowableStream.create.js";

const Flowable_create: <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
) => FlowableLike<T> = (<T>() => {
  type TProperties = Mutable<
    Pick<
      FlowableLike<T>,
      typeof ObservableLike_observe | typeof StreamableLike_stream
    >
  >;

  return createInstanceFactory(
    mix(
      function CreateFlowable(
        instance: FlowableLike<T> & TProperties,
        op: ContainerOperator<ObservableLike, boolean, T>,
      ): FlowableLike<T> {
        const observable = Observable_create(observer => {
          const capacity = observer[BufferLike_capacity];
          const backpressureStrategy =
            observer[QueueableLike_backpressureStrategy];

          const op: ContainerOperator<ObservableLike, T, boolean> = compose(
            Observable_enqueue<ObservableLike, T>(observer),
            Observable_ignoreElements<ObservableLike, boolean>(),
            // Intentionally use mergeWith here. The stream observer
            // needs to be immediately subscribed to when created
            // otherwise it will have no observer to queue events onto.
            // Observable.startWith uses concatenation.
            Observable_mergeWith<ObservableLike, boolean>(
              pipe(false, Optional_toObservable()),
            ),
          );

          const stream = pipe(
            Stream_create<T, boolean>(op, observer, {
              backpressureStrategy,
              capacity,
            }),
            Disposable_onComplete(
              bindMethod(observer, DispatcherLike_complete),
            ),
            Disposable_addTo(observer),
          );

          pipe(
            instance,
            Streamable_sinkInto(stream),
            Disposable_addTo(observer),
          );
        });
        instance[StreamableLike_stream] = (scheduler, options) =>
          FlowableStream_create<T>(op, scheduler, options);

        instance[ObservableLike_observe] = bindMethod(
          observable,
          ObservableLike_observe,
        );

        return instance;
      },
      props<TProperties>({
        [ObservableLike_observe]: none,
        [StreamableLike_stream]: none,
      }),
      {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      },
    ),
  );
})();

export default Flowable_create;
