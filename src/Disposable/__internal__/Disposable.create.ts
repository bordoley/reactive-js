import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory } from "../../__internal__/mixins.js";
import { Factory } from "../../functions.js";
import { DisposableLike } from "../../types.js";

const Disposable_create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export default Disposable_create;
