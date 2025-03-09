import { Array_length, Array_push } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  DeferredObservableLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Optional,
  Tuple2,
  compose,
  isFunction,
  isNumber,
  isReadonlyArray,
  pipe,
  returns,
  tuple,
} from "../../../functions.js";
import { scale } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  EventListenerLike_notify,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as Subject from "../../Subject.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Streamable_spring: Streamable.Signature["spring"] = /*@__PURE__*/ (() => {
  const ObservableModule = {
    concat: Observable.concat,
    concatAll: Observable.concatAll,
    forEach: Observable.forEach,
    fromReadonlyArray: Observable.fromReadonlyArray,
    keep: Observable.keep,
    map: Observable.map,
  };

  const SpringStream_create = mixInstanceFactory(
    include(
      StreamMixin(),
      DelegatingPauseableMixin,
      DelegatingEventSourceMixin(),
    ),
    function SpringStream(
      instance: unknown,
      initialValue: number,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      springOptions: Optional<{
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
      }>,
      options: Optional<{
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      }>,
    ): Streamable.SpringStreamLike & DisposableLike {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);
      const publisher = Publisher.create<number>();
      const accFeedbackStream = Subject.create<number>({ replay: 1 });

      const operator = compose(
        Observable.withLatestFrom<
          Streamable.SpringEvent,
          number,
          DeferredObservableLike<boolean>
        >(accFeedbackStream, (updater, acc) => {
          const command = isFunction(updater) ? updater(acc) : updater;
          const springCommandOptions =
            isNumber(command) || isReadonlyArray(command)
              ? springOptions
              : {
                  stiffness: command.stiffness ?? springOptions?.stiffness,
                  damping: command.damping ?? springOptions?.damping,
                  precision: command.precision ?? springOptions?.precision,
                };

          const startValue =
            isNumber(command) || isReadonlyArray(command) ? acc : command.from;

          const destinations = isNumber(command)
            ? [command]
            : isReadonlyArray(command)
              ? command
              : isNumber(command.to)
                ? [command.to]
                : command.to;

          const sources = pipe(
            destinations,
            Iterable.scan<number, Tuple2<number, number>>(
              ([, prev], v) => tuple(prev, v),
              returns(tuple(startValue, startValue)),
            ),
            Iterable.reduce(
              (
                animations: Array<PureSynchronousObservableLike<number>>,
                [prev, next],
              ) => {
                if (prev !== next) {
                  animations[Array_push](
                    pipe(
                      Observable.spring(springCommandOptions),
                      Observable.map(scale(prev, next)),
                    ),
                  );
                }
                return animations;
              },
              () => [],
            ),
          );

          return sources[Array_length] > 0
            ? pipe(
                sources,
                Computation.concatMany(ObservableModule),
                Computation.notify(ObservableModule)(publisher),
                Computation.notify(ObservableModule)(accFeedbackStream),
                Computation.ignoreElements(ObservableModule)(),
                Observable.subscribeOn(pauseableScheduler),
                Computation.startWith(ObservableModule)(true),
                Computation.endWith(ObservableModule)(false),
              )
            : Observable.empty();
        }),
        Observable.switchAll(),
      );

      init(
        StreamMixin<Streamable.SpringEvent, boolean>(),
        instance,
        operator,
        scheduler,
        options,
      );

      init(DelegatingPauseableMixin, instance, pauseableScheduler);

      init(DelegatingEventSourceMixin(), instance, publisher);

      pipe(
        instance,
        Disposable.add(publisher),
        Disposable.add(accFeedbackStream),
        Disposable.add(pauseableScheduler),
      );

      instance[PauseableLike_resume]();

      accFeedbackStream[EventListenerLike_notify](initialValue);

      return instance;
    },
  );

  return (
    initialValue: number,
    creationOptions?: {
      readonly animationScheduler?: SchedulerLike;
      readonly stiffness?: number;
      readonly damping?: number;
      readonly precision?: number;
    },
  ): StreamableLike<
    Streamable.SpringEvent,
    boolean,
    Streamable.SpringStreamLike
  > => ({
    [StreamableLike_stream]: (scheduler, options) =>
      SpringStream_create(
        initialValue,
        scheduler,
        creationOptions?.animationScheduler ?? scheduler,
        creationOptions,
        options,
      ),
  });
})();
export default Streamable_spring;
