import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { bindMethod, pipe } from "../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  EnumeratorFactoryLike,
} from "../../types.js";
import EnumeratorFactory_enqueue from "./EnumeratorFactory.enqueue.js";

const EnumeratorFactory_dispatchTo: EnumeratorFactory.Signature["dispatchTo"] =
  <T>(dispatcher: DispatcherLike<T>) =>
  (f: EnumeratorFactoryLike<T>) => {
    const enqueuedFactory = pipe(f, EnumeratorFactory_enqueue(dispatcher));
    return () => {
      const enumerator = enqueuedFactory();
      pipe(
        enumerator,
        Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)),
      );
      return enumerator;
    };
  };

export default EnumeratorFactory_dispatchTo;
