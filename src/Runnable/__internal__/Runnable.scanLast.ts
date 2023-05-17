import Observable_scanLast from "../../Observable/__internal__/Observable.scanLast.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: Runnable.Signature["scanLast"] =
  /*@__PURE__*/ Observable_scanLast<Runnable.Type, Runnable.Type>(
    Runnable_create,
  );

export default Runnable_scanLast;
