import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_toObservable from "../../Enumerator/__internal__/Enumerator.toObservable.js";
import type * as Observable from "../../Observable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { Factory, invoke, pipe } from "../../functions.js";
import {
  EnumeratorLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const Observable_fromEnumeratorFactory: Observable.Signature["fromEnumeratorFactory"] =
  (<T>(options?: { readonly delay?: number; readonly delayStart?: boolean }) =>
    (factory: Factory<EnumeratorLike<T>>) => {
      const { delay = 0 } = options ?? {};
      const onSubscribe = (observer: ObserverLike<T>) => {
        const enumerator = factory();

        pipe(
          enumerator,
          Enumerator_toObservable(
            options as {
              readonly delay: number;
              readonly delayStart?: boolean;
            },
          ),
          invoke(ObservableLike_observe, observer),
        );
      };

      return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
    }) as Observable.Signature["fromEnumeratorFactory"];

export default Observable_fromEnumeratorFactory;
