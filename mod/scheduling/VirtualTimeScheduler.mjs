/// <reference types="./VirtualTimeScheduler.d.ts" />
import VirtualTimeScheduler_create from './__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create.mjs';

const create = VirtualTimeScheduler_create;
/** @ignore */
const VirtualTimeScheduler = {
    create,
};

export { create, VirtualTimeScheduler as default };
