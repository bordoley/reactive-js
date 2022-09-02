import { Defer } from "../../containers";
import { Factory, SideEffect1, none, pipe } from "../../functions";
import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
} from "../../rx";
import { Mutable, createInstanceFactory, mixin, props } from "../mixins";
import { dispose } from "../util/DisposableLike.operators";

const createImpl: <T>(
  f: SideEffect1<ObserverLike>,
  isEnumerable: boolean,
  isRunnable: boolean,
) => ObservableLike<T> = /*@__PURE__*/ (() => {
  type TProperties = {
    readonly f: SideEffect1<ObserverLike>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mixin(
      function CreateObservable(
        instance: Pick<ObservableLike, typeof ReactiveContainerLike_sinkInto> &
          Mutable<TProperties>,
        f: SideEffect1<ObserverLike>,
        isEnumerable: boolean,
        isRunnable: boolean,
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
          } catch (cause) {
            pipe(observer, dispose({ cause }));
          }
        },
      },
    ),
  );
})();

export const createEnumerableObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  createImpl(f, true, true) as EnumerableObservableLike<T>;

export const createObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): ObservableLike<T> => createImpl(f, false, false);

export const createRunnableObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  createImpl(f, false, true) as RunnableObservableLike<T>;

export const deferObservableImpl = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable: boolean,
  isRunnable: boolean,
): ObservableLike<T> =>
  createImpl(
    observer => {
      factory()[ReactiveContainerLike_sinkInto](observer);
    },
    isEnumerable,
    isRunnable,
  );

export const deferEnumerableObservable: Defer<EnumerableObservableLike>["defer"] =
  (f =>
    deferObservableImpl(
      f,
      true,
      true,
    )) as Defer<EnumerableObservableLike>["defer"];

export const deferObservable: Defer<
  ObservableLike,
  { delay: number }
>["defer"] = f => deferObservableImpl(f, false, false);

export const deferRunnableObservable: Defer<
  RunnableObservableLike,
  { delay: number }
>["defer"] = (f =>
  deferObservableImpl(
    f,
    false,
    true,
  )) as Defer<RunnableObservableLike>["defer"];
