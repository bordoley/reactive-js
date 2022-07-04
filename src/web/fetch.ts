import { dispose, toAbortSignal } from "../disposable";
import { Function1, newInstance, pipe, returns } from "../functions";
import { ObservableLike, defer, fromPromise } from "../observable";
import { Option, none } from "../option";
import { sinkInto } from "../reactive";
import { FetchRequest } from "../web";

const globalFetch = self.fetch;

export const fetch =
  <T>(
    onResponse: Function1<Response, Promise<T> | ObservableLike<T>>,
  ): Function1<FetchRequest | string, ObservableLike<T>> =>
  fetchRequest =>
    defer(() => async observer => {
      const signal = toAbortSignal(observer);

      let request: Option<string | Request> = none;
      if (typeof fetchRequest === "string") {
        request = fetchRequest;
      } else {
        const { uri, ...requestInit } = fetchRequest;
        request = newInstance(Request, uri, requestInit);
      }

      // This try/catch is necessary because we await in the try block.
      try {
        const response = await globalFetch(request, { signal });

        const onResponseResult = onResponse(response);
        const resultObs =
          onResponseResult instanceof Promise
            ? fromPromise(returns(onResponseResult))
            : onResponseResult;

        pipe(resultObs, sinkInto(observer));
      } catch (cause) {
        pipe(observer, dispose({ cause }));
      }
    });
