/// <reference types="./util.d.ts" />
import { prototype, properties, init } from './__internal__/util/Disposable.mjs';
import { createObjectFactory } from './__internal__/util/Object.mjs';

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);
const createDisposable = () => {
    const instance = createInstance();
    init(instance);
    return instance;
};

export { createDisposable };
