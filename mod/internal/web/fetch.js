import { dispose, addTeardown } from "../../disposable.js";
import { returns, pipe } from "../../functions.js";
import { fromPromise, observe } from "../../observable.js";
import { none } from "../../option.js";
import { defer } from "../observable/observable.js";
const globalFetch = self.fetch;
export const fetch = (onResponse) => fetchRequest => defer(() => async (observer) => {
    const abortController = new AbortController();
    addTeardown(observer, () => abortController.abort());
    let request = none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = new Request(uri, requestInit);
    }
    try {
        const response = await globalFetch(request, {
            signal: abortController.signal,
        });
        const onResponseResult = onResponse(response);
        const resultObs = onResponseResult instanceof Promise
            ? fromPromise(returns(onResponseResult))
            : onResponseResult;
        pipe(resultObs, observe(observer));
    }
    catch (cause) {
        pipe(observer, dispose({ cause }));
    }
});
