import { ObservableContainer, ObservableLike, ZipLatest } from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_zipLatest: ZipLatest<ObservableContainer>["zipLatest"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable_latest(observables, 2);

export default Observable_zipLatest;
