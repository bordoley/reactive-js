import { dispose, addTeardown } from "../../disposable.ts";
import { Function1, returns, pipe } from "../../functions.ts";
import { fromPromise, observe, ObservableLike } from "../../observable.ts";
import { Option, none } from "../../option.ts";
import { defer } from "../observable/observable.ts";

const globalFetch = self.fetch;

export type FetchRequest = RequestInit & {
  uri: string;
};

export const fetch = <T>(
  onResponse: Function1<Response, Promise<T> | ObservableLike<T>>,
): Function1<FetchRequest | string, ObservableLike<T>> => fetchRequest =>
  defer(() => async observer => {
    const abortController = new AbortController();
    addTeardown(observer, () => abortController.abort());

    let request: Option<string | Request> = none;
    if (typeof fetchRequest === "string") {
      request = fetchRequest;
    } else {
      const { uri, ...requestInit } = fetchRequest;
      request = new Request(uri, requestInit);
    }

    // This try/catch is necessary because we await in the try block.
    try {
      const response = await globalFetch(request, {
        signal: abortController.signal,
      });

      const onResponseResult = onResponse(response);
      const resultObs =
        onResponseResult instanceof Promise
          ? fromPromise(returns(onResponseResult))
          : onResponseResult;

      pipe(resultObs, observe(observer));
    } catch (cause) {
      pipe(observer, dispose({ cause }));
    }
  });
