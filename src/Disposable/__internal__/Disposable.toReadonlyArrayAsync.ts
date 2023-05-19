import type * as Disposable from "../../Disposable.js";
import { pipe } from "../../functions.js";
import Disposable_onComplete from "./Disposable.onComplete.js";
import Disposable_onError from "./Disposable.onError.js";

const Disposable_toReadonlyArrayAsync: Disposable.Signature["toReadonlyArrayAsync"] =

    <T>() =>
    disposable =>
      new Promise<readonly T[]>((resolve, reject) => {
        pipe(
          disposable,
          Disposable_onComplete(() => resolve([])),
          Disposable_onError(reject),
        );
      });

export default Disposable_toReadonlyArrayAsync;
