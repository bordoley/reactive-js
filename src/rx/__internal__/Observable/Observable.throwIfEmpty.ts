import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer$throwIfEmpty from "../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty";
import { Factory, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$throwIfEmptyMixin from "../Sink/Sink.throwIfEmptyMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (<T>() => {
      const typedThrowIfEmptySinkMixin = Sink$throwIfEmptyMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedThrowIfEmptySinkMixin),
          function ThrowIfEmptyObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            factory: Factory<unknown>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createThrowIfEmptyObserver,
      StatefulContainer$throwIfEmpty(Observable$liftEnumerableOperatorT),
    );
  })();

export default Observable$throwIfEmpty;
