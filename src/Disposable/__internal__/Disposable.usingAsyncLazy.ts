import type * as Disposable from "../../Disposable.js";
import { Factory, Function1 } from "../../functions.js";
import { DisposableLike } from "../../types.js";
import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";

const Disposable_usingAsyncLazy: Disposable.Signature["usingAsyncLazy"] =
  (
    ...factoryOrDisposables: readonly (
      | DisposableLike
      | Factory<DisposableLike>
    )[]
  ): Function1<
    (...args: DisposableLike[]) => unknown,
    Factory<Promise<unknown>>
  > =>
  f =>
  async () =>
    Disposable_usingAsyncImpl(f, factoryOrDisposables);

export default Disposable_usingAsyncLazy;
