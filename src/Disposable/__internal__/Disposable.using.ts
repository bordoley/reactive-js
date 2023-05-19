import type * as Disposable from "../../Disposable.js";
import { Factory, Function1 } from "../../functions.js";
import { DisposableLike } from "../../types.js";
import Disposable_usingImpl from "./Disposable.usingImpl.js";

const Disposable_using: Disposable.Signature["using"] = ((
    ...factoryOrDisposables: readonly (
      | DisposableLike
      | Factory<DisposableLike>
    )[]
  ): Function1<(...args: DisposableLike[]) => unknown, unknown> =>
  f =>
    Disposable_usingImpl(
      f,
      factoryOrDisposables,
    )) as Disposable.Signature["using"];

export default Disposable_using;
