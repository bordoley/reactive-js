/// <reference types="./VirtualTimeScheduler.d.ts" />
import VirtualTimeScheduler_create from './VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.mjs';

const create = VirtualTimeScheduler_create;
/** @ignore */
const VirtualTimeScheduler = {
    create,
};

export { create, VirtualTimeScheduler as default };
