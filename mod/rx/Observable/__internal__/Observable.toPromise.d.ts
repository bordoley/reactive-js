import { ToPromiseable } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_toPromise: ToPromiseable<ObservableLike, SchedulerLike>["toPromise"];
export { Observable_toPromise as default };
