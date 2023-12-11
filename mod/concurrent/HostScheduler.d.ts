import { SchedulerLike } from "../concurrent.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
interface Signature {
    create(options?: {
        readonly maxYieldInterval?: number;
    }): SchedulerLike & DisposableLike;
}
export declare const create: Signature["create"];
export {};
