import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as Observable from "../../Observable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import {
  Function1,
  bindMethod,
  invoke,
  newInstance,
  pipe,
} from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../types.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: Observable.Signature["encodeUtf8"] =
  (observable => {
    const createObservable = observable[ObservableLike_isEnumerable]
      ? Enumerable_create
      : observable[ObservableLike_isRunnable]
      ? Runnable_create
      : observable[ObservableLike_isDeferred]
      ? DeferredObservable_create
      : SharedObservable_create;

    return createObservable(observer => {
      const textEncoder = newInstance(TextEncoder);

      pipe(
        observable,
        Observable_map<string, Uint8Array>(
          bindMethod(textEncoder, "encode"),
        ) as Function1<ObservableLike<string>, ObservableLike<Uint8Array>>,
        invoke(ObservableLike_observe, observer),
      );
    });
  }) as Observable.Signature["encodeUtf8"];

export default Observable_encodeUtf8;
