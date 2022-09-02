import { pipe } from "../../functions";
import { DisposableLike } from "../../util";
import { createInstanceFactory } from "../mixins";
import { disposableMixin } from "./DisposableLike.mixins";
import { dispose } from "./DisposableLike.operators";

export const createDisposable =
  /*@__PURE__*/ createInstanceFactory(disposableMixin);

export const disposed: DisposableLike = /*@__PURE__*/ (() => {
  const instance = createDisposable();
  pipe(instance, dispose());
  return instance;
})();
