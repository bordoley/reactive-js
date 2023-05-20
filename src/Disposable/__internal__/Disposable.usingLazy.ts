import type * as Disposable from "../../Disposable.js";
import { Factory, Function1 } from "../../functions.js";
import { DisposableLike } from "../../types.js";
import Disposable_usingImpl from "./Disposable.usingImpl.js";

const Disposable_usingLazy: Disposable.Signature["usingLazy"] =
  (
    ...factoryOrDisposables: readonly (
      | DisposableLike
      | Factory<DisposableLike>
    )[]
  ): Function1<(...args: DisposableLike[]) => unknown, Factory<unknown>> =>
  f =>
  () =>
    Disposable_usingImpl(f, factoryOrDisposables);

export default Disposable_usingLazy;
