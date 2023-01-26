/// <reference types="./DelegatingSink.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import DelegateSink$mixin from './DelegatingSink.mixin.mjs';

const DelegateSink$create = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = DelegateSink$mixin();
    return createInstanceFactory(typeDelegatingSinkMixin);
})();

export { DelegateSink$create as default };
