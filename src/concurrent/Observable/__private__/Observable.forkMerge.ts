import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationOfInnerType,
  DeferredComputationWithSideEffectsLike,
  PureDeferredComputationLike,
} from "../../../computations.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../concurrent.js";
import {
  Function1,
  Optional,
  invoke,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
import Observable_merge from "./Observable.merge.js";
import Observable_multicast from "./Observable.multicast.js";

const ObservableModule = { merge: Observable_merge };

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<
    TIn,
    TOut,
    TInnerType extends
      | PureDeferredComputationLike
      | DeferredComputationWithSideEffectsLike = PureDeferredComputationLike,
  >(
    ...args:
      | readonly [
          ...Function1<
            MulticastObservableLike<TIn>,
            ComputationOfInnerType<Observable.Computation, TInnerType, TOut>
          >[],
          {
            innerType?: TInnerType;
          },
        ]
      | readonly Function1<
          MulticastObservableLike<TIn>,
          ComputationOfInnerType<Observable.Computation, TInnerType, TOut>
        >[]
  ) =>
  (obs: ObservableLike<TIn>) => {
    const argsLength = args.length;
    const lastArg = args[argsLength - 1];
    const maybeConfig: Optional<{ innerType?: TInnerType }> =
      isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = (
      isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args
    ) as ReadonlyArray<
      Function1<
        MulticastObservableLike<TIn>,
        ComputationOfInnerType<Observable.Computation, TInnerType, TOut>
      >
    >;
    const innerType = maybeConfig?.innerType ?? {};
    const isPure = Computation.isPure(innerType);

    const create = isPure
      ? Observable_createPureDeferredObservable
      : Observable_create;

    return Computation.isMulticasted(obs)
      ? pipe(
          ops,
          ReadonlyArray.map(op => op(obs)),
          Computation.mergeMany(ObservableModule),
        )
      : create<TOut>(observer => {
          const src = pipe(
            obs as DeferredObservableLike<TIn>,
            Observable_multicast(observer, { autoDispose: true }),
            Disposable.addTo(observer),
          );

          pipe(
            ops,
            ReadonlyArray.map(op => op(src)),
            Computation.mergeMany(ObservableModule),
            invoke(ObservableLike_observe, observer),
          );
        });
  }) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
