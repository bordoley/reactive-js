/// <reference types="./DelegatingSinkLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import mixin from './DelegatingSinkLike.mixin.mjs';

const create = /*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = mixin();
    return createInstanceFactory(typeDelegatingSinkMixin);
})();

export { create as default };
