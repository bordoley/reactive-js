/// <reference types="./DelegatingSinkLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import DelegateSinkLike__mixin from './DelegatingSinkLike.mixin.mjs';

const DelegateSinkLike__create = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = DelegateSinkLike__mixin();
    return createInstanceFactory(typeDelegatingSinkMixin);
})();

export { DelegateSinkLike__create as default };
