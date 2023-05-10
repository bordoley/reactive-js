import type * as Disposable from "../../Disposable.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory } from "../../__internal__/mixins.js";

const Disposable_create: Disposable.Signature["create"] =
  /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export default Disposable_create;
