import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationOf,
  ComputationType,
  ConcurrentReactiveComputationModule,
  DeferredReactiveComputationModule,
  FlattenedHigherOrderComputationLike,
  HigherOrderInnerComputationLike,
  HigherOrderInnerComputationOf,
  PickComputationModule,
  SequentialComputationModule,
  SourceLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Factory, Function2, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ConsumerLike, ListenerLike_notify } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as Publisher from "../../Publisher.js";
import * as Source from "../Source.js";

export const createOperator =
  <TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType> &
        ConcurrentReactiveComputationModule<TComputationType> &
        DeferredReactiveComputationModule<TComputationType> &
        SequentialComputationModule<TComputationType>,
      "forEach" | "fromBroadcaster" | "map" | "switchAll" | "withLatestFrom"
    >,
  ) =>
  <T, TAcc, TInnerLike extends HigherOrderInnerComputationLike>(
    scanner: Function2<
      TAcc,
      T,
      HigherOrderInnerComputationOf<TComputationType, TInnerLike, TAcc>
    >,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: TInnerLike;
    },
  ) =>
  <TConsumer extends ConsumerLike<TAcc>>(
    source: ComputationOf<TComputationType, T>,
  ): SourceLike<TAcc> &
    FlattenedHigherOrderComputationLike<
      ComputationOf<TComputationType, T>,
      TInnerLike
    > =>
    Source.create<TAcc, TConsumer>(
      (consumer: TConsumer) => {
        const accFeedbackPublisher = pipe(
          Publisher.create<TAcc>(),
          Disposable.addTo(consumer),
        );

        const feedbackSource = pipe(
          accFeedbackPublisher,
          m.fromBroadcaster<TAcc>(),
        );

        (
          pipe(
            source,
            m.withLatestFrom<
              T,
              TAcc,
              HigherOrderInnerComputationOf<TComputationType, TInnerLike, TAcc>
            >(feedbackSource, (next, acc) => scanner(acc, next)),
            m.switchAll<TAcc, TInnerLike>(options),
            Computation.notify<TComputationType>(m)(accFeedbackPublisher),
          ) as any
        )[SourceLike_subscribe](consumer);

        accFeedbackPublisher[ListenerLike_notify](initialValue());
      },
      {
        [ComputationLike_isDeferred]:
          Computation.isDeferred(source) &&
          Computation.isDeferred(options.innerType),
        [ComputationLike_isPure]:
          Computation.isPure(source) && Computation.isPure(options.innerType),
        [ComputationLike_isSynchronous]:
          Computation.isSynchronous(source) &&
          Computation.isSynchronous(options.innerType),
      },
    ) as SourceLike<TAcc> &
      FlattenedHigherOrderComputationLike<
        ComputationOf<TComputationType, T>,
        TInnerLike
      >;
