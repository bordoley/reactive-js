/// <reference types="./DisposableLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import DisposableLike__disposableMixin from './DisposableLike.mixin.mjs';

const DisposableLike__create = 
/*@__PURE__*/ createInstanceFactory(DisposableLike__disposableMixin);

export { DisposableLike__create as default };
