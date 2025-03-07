import { VirtualTimeSchedulerLike } from "../utils.js";
interface Signature {
    create(options?: {
        readonly maxMicroTaskTicks?: number;
    }): VirtualTimeSchedulerLike;
}
export declare const create: Signature["create"];
export {};
