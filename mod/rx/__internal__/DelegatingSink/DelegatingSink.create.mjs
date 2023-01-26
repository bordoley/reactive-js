/// <reference types="./DelegatingSink.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import DelegateSink_mixin from './DelegatingSink.mixin.mjs';

const DelegateSink_create = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = DelegateSink_mixin();
    return createInstanceFactory(typeDelegatingSinkMixin);
})();

export { DelegateSink_create as default };
