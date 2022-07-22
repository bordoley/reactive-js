/// <reference types="./util.d.ts" />
import { prototype, properties, init } from './__internal__/util/Disposable.mjs';
import { createObject } from './__internal__/util/createObject.mjs';

const createDisposable = () => {
    const instance = createObject(prototype, properties);
    init(instance);
    return instance;
};

export { createDisposable };
