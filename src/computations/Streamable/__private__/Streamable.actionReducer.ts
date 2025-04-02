import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  StoreLike_value,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Optional,
  Reducer,
  compose,
  none,
} from "../../../functions.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const m = Computation.makeModule<Observable.Signature, "genPure" | "concat">({
  genPure: Observable.genPure,
  concat: Observable.concat,
});

const Streamable_actionReducer: Streamable.Signature["actionReducer"] =
  /*@__PURE__*/ (<TAction, T>() => {
    type TProperties = {
      [StoreLike_value]: T;
    };
    const createStateStoreStream = mixInstanceFactory(
      include(StreamMixin()),
      function StateStoreStream(
        this: TProperties,
        reducer: Reducer<TAction, T>,
        initialState: Factory<T>,
        setupOptions: Optional<{ readonly equality?: Equality<T> }>,
        scheduler: SchedulerLike,
        options: Optional<{
          readonly autoDispose?: boolean;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        }>,
      ): Streamable.StateStoreStreamLike<TAction, T> {
        const acc = initialState();
        this[StoreLike_value] = acc;

        const operator = compose(
          Observable.scan(reducer, initialState),
          Computation.startWith(m, acc),
          Observable.distinctUntilChanged<T>(setupOptions),
          Observable.forEach(acc => {
            this[StoreLike_value] = acc;
          }),
        );

        init(StreamMixin<TAction, T>(), this, operator, scheduler, options);

        return this;
      },
      props<TProperties>({
        [StoreLike_value]: none,
      }),
    );

    return (
      reducer: Reducer<TAction, T>,
      initialState: Factory<T>,
      setupOptions?: { readonly equality?: Equality<T> },
    ) => ({
      [StreamableLike_stream]: (scheduler, options) =>
        createStateStoreStream(
          reducer,
          initialState,
          setupOptions,
          scheduler,
          options,
        ),
    });
  })();

export default Streamable_actionReducer;
