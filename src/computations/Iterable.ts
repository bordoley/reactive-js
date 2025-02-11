import { mixInstanceFactory, props } from "../__internal__/mixins.js";
import {
  Computation,
  Computation_T,
  Computation_type,
  PureStatelessComputationModule,
} from "../computations.js";
import { Function1, Predicate, none } from "../functions.js";

/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation {
  readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}

export interface IterableModule
  extends PureStatelessComputationModule<IterableComputation> {}

export type Signature = IterableModule;

export const keep: Signature["keep"] = (<T>() => {
  const KeepIterable_predicate = Symbol("KeepIterable_predicate");
  const KeepIterable_delegate = Symbol("KeepIterable_delegate");

  type TProperties = {
    [KeepIterable_delegate]: Iterable<T>;
    [KeepIterable_predicate]: Predicate<T>;
  };

  const createKeepIterable = mixInstanceFactory(
    function KeepIterable(
      instance: Iterable<T> & TProperties,
      delegate: Iterable<T>,
      predicate: Predicate<T>,
    ): Iterable<T> {
      instance[KeepIterable_delegate] = delegate;
      instance[KeepIterable_predicate] = predicate;
      return instance;
    },
    props<TProperties>({
      [KeepIterable_delegate]: none,
      [KeepIterable_predicate]: none,
    }),
    {
      *[Symbol.iterator](this: TProperties) {
        const delegate = this[KeepIterable_delegate];
        const predicate = this[KeepIterable_predicate];

        for (const v of delegate) {
          if (predicate(v)) {
            yield v;
          }
        }
      },
    },
  );

  return (predicate: Predicate<T>) => (iterable: Iterable<T>) =>
    createKeepIterable(iterable, predicate);
})();

export const map: Signature["map"] = (<TA, TB>() => {
  const MapIterable_mapper = Symbol("MapIterable_mapper");
  const MapIterable_delegate = Symbol("MapIterable_delegate");

  type TProperties = {
    [MapIterable_delegate]: Iterable<TA>;
    [MapIterable_mapper]: Function1<TA, TB>;
  };

  const createMapIterable = mixInstanceFactory(
    function MapIterable(
      instance: Iterable<TB> & TProperties,
      delegate: Iterable<TA>,
      mapper: Function1<TA, TB>,
    ): Iterable<TB> {
      instance[MapIterable_delegate] = delegate;
      instance[MapIterable_mapper] = mapper;
      return instance;
    },
    props<TProperties>({
      [MapIterable_delegate]: none,
      [MapIterable_mapper]: none,
    }),
    {
      *[Symbol.iterator](this: TProperties) {
        const delegate = this[MapIterable_delegate];
        const mapper = this[MapIterable_mapper];

        for (const v of delegate) {
          yield mapper(v);
        }
      },
    },
  );

  return (mapper: Function1<TA, TB>) => (iterable: Iterable<TA>) =>
    createMapIterable(iterable, mapper);
})();
