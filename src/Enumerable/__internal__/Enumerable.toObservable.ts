import type * as Enumerable from "../../Enumerable.js";
import EnumeratorFactory_toObservable from "../../EnumeratorFactory/__internal__/EnumeratorFactory.toObservable.js";
import { compose, identity } from "../../functions.js";
import Enumerable_toEnumeratorFactory from "./Enumerable.toEnumeratorFactory.js";

const Enumerable_toObservable: Enumerable.Signature["toObservable"] =
  ((options?: { delay?: number; delayStart?: boolean }) =>
    options?.delay ?? 0 > 0
      ? compose(
          Enumerable_toEnumeratorFactory(),
          EnumeratorFactory_toObservable(
            options as {
              delay: number;
              delayStart?: boolean;
            },
          ),
        )
      : identity) as Enumerable.Signature["toObservable"];

export default Enumerable_toObservable;
