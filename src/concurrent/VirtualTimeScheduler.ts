import { VirtualTimeSchedulerLike } from "../concurrent.js";
import VirtualTimeScheduler_create from "./VirtualTimeScheduler/__private__/VirtualTimeScheduler.create.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface VirtualTimeSchedulerModule {
  create(options?: {
    readonly maxMicroTaskTicks?: number | undefined;
  }): VirtualTimeSchedulerLike;
}

export type Signature = VirtualTimeSchedulerModule;

export const create: Signature["create"] = VirtualTimeScheduler_create;
