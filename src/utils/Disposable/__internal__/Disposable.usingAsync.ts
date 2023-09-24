import { Factory, Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";

const Disposable_usingAsync: Disposable.Signature["usingAsync"] = ((
    ...factoryOrDisposables: readonly (
      | DisposableLike
      | Factory<DisposableLike>
    )[]
  ): Function1<(...args: DisposableLike[]) => unknown, Promise<unknown>> =>
  f =>
    Disposable_usingAsyncImpl(
      f,
      factoryOrDisposables,
    )) as Disposable.Signature["usingAsync"];
export default Disposable_usingAsync;
