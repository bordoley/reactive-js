import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, pipe } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
import {
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom.js";

const Flowable_toObservable: ToObservable<FlowableLike>["toObservable"] =
  <T>() =>
  (src: FlowableLike<T>): ObservableLike<T> => {
    const create = src[StreamableLike_isRunnable]
      ? Runnable_create
      : Observable_create;

    return create(observer => {
      const scheduler = observer[DispatcherLike_scheduler];
      const maxBufferSize = observer[QueueableLike_maxBufferSize];

      const op: ContainerOperator<ObservableLike, T, boolean> = compose(
        Observable_forEach<ObservableLike, T>(v => {
          if (!observer[QueueableLike_push](v)) {
            scheduler[SchedulerLike_requestYield]();
          }
        }),
        Observable_ignoreElements<ObservableLike, boolean>(),
        // Intentionally use mergeWith here. The stream observer
        // needs to be immediately subscribed to when created
        // otherwise it will have no observer to queue events onto.
        // Observable.startWith uses concatenation.
        Observable_mergeWith<ObservableLike, boolean>(
          pipe(false, Optional_toObservable()),
        ),
      );

      pipe(
        Stream_create<T, boolean>(op, scheduler, { maxBufferSize }),
        Stream_sourceFrom(src),
        Disposable_addTo(observer),
        Disposable_onComplete(observer[DispatcherLike_complete], observer),
      );
    });
  };

export default Flowable_toObservable;
