import Observable_scanMany from "../../Observable/__internal__/Observable.scanMany.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: Runnable.Signature["scanMany"] =
  /*@__PURE__*/ Observable_scanMany<Runnable.Type, Runnable.Type>(
    Runnable_create,
  );

export default Runnable_scanMany;
