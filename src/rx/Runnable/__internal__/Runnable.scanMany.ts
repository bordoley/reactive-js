import { RunnableContainerLike, ScanMany } from "../../../rx.js";
import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: ScanMany<RunnableContainerLike>["scanMany"] =
  HigherOrderObservable_scanMany<RunnableContainerLike>(Runnable_create);

export default Runnable_scanMany;
