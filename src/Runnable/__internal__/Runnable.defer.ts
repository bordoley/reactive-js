import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<RunnableContainer>(Runnable_create);
export default Runnable_defer;
