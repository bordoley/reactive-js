import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";

const Disposable_create: Disposable.Signature["create"] = /*@__PURE__*/ (() =>
  mixInstanceFactory<DisposableLike, DisposableLike>(
    include(DisposableMixin),
    function CreateDisposable(instance: DisposableLike) {
      init(DisposableMixin, instance);
      return instance;
    },
  ))();

export default Disposable_create;
