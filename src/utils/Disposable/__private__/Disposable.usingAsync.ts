import { Factory, Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";

const Disposable_usingAsync: Disposable.Signature["usingAsync"] = ((
    ...factories: readonly Factory<DisposableLike>[]
  ): Function1<
    (...args: DisposableLike[]) => Promise<unknown>,
    Promise<unknown>
  > =>
  f =>
    Disposable_usingAsyncImpl(
      f,
      factories,
    )) as Disposable.Signature["usingAsync"];
export default Disposable_usingAsync;
