import { DisposableLike, SchedulerLike } from "../../types.js";
import { WindowLocationLike } from "../web.js";
export declare const subscribe: (scheduler: SchedulerLike) => WindowLocationLike & DisposableLike;
