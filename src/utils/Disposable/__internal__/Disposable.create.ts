import { createInstanceFactory } from "../../../__internal__/mixins.js";
import type * as Disposable from "../../Disposable.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";

const Disposable_create: Disposable.Signature["create"] =
  /*@__PURE__*/ createInstanceFactory(DisposableMixin);

export default Disposable_create;
