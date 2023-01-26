import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SideEffect1, error, none, pipe } from "../../../functions";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";

const Observable_create: <T>(
  f: SideEffect1<ObserverLike>,
  isEnumerable?: boolean,
  isRunnable?: boolean,
) => ObservableLike<T> = /*@__PURE__*/ (() => {
  type TProperties = {
    readonly f: SideEffect1<ObserverLike>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mix(
      function CreateObservable(
        instance: Pick<ObservableLike, typeof ReactiveContainerLike_sinkInto> &
          Mutable<TProperties>,
        f: SideEffect1<ObserverLike>,
        isEnumerable = false,
        isRunnable = false,
      ): ObservableLike {
        instance.f = f;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;

        return instance;
      },
      props<TProperties>({
        f: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
      }),
      {
        [ReactiveContainerLike_sinkInto](
          this: {
            f: SideEffect1<ObserverLike>;
          },
          observer: ObserverLike,
        ) {
          try {
            this.f(observer);
          } catch (e) {
            pipe(observer, Disposable_dispose(error(e)));
          }
        },
      },
    ),
  );
})();

export default Observable_create;
