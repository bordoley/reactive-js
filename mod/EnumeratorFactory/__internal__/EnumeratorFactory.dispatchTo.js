/// <reference types="./EnumeratorFactory.dispatchTo.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import { bindMethod, pipe } from "../../functions.js";
import { DispatcherLike_complete, } from "../../types.js";
import EnumeratorFactory_enqueue from "./EnumeratorFactory.enqueue.js";
const EnumeratorFactory_dispatchTo = (dispatcher) => (f) => {
    const enqueuedFactory = pipe(f, EnumeratorFactory_enqueue(dispatcher));
    return () => {
        const enumerator = enqueuedFactory();
        pipe(enumerator, Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
        return enumerator;
    };
};
export default EnumeratorFactory_dispatchTo;
