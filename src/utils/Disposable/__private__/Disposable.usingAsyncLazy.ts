import { Factory, Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";

const Disposable_usingAsyncLazy: Disposable.Signature["usingAsyncLazy"] =
  (
    ...factories: readonly Factory<DisposableLike>[]
  ): Function1<
    (...args: DisposableLike[]) => unknown,
    Factory<Promise<unknown>>
  > =>
  f =>
  async () =>
    Disposable_usingAsyncImpl(f, factories);

export default Disposable_usingAsyncLazy;
