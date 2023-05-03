import { Container } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: Container.ConcatAll<ObservableContainer>["concatAll"] =
  () => Observable_mergeAll({ concurrency: 1 });

export default Observable_concatAll;
