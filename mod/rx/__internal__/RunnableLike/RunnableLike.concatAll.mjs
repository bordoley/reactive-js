/// <reference types="./RunnableLike.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipeLazy, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DelegateSinkLike__create from '../DelegatingSinkLike/DelegatingSinkLike.create.mjs';
import DelegateSinkLike__mixin from '../DelegatingSinkLike/DelegatingSinkLike.mixin.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__concatAll = 
/*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = DelegateSinkLike__mixin();
    return pipeLazy(createInstanceFactory(mix(include(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, DisposableLike__bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(DelegateSinkLike__create(delegate), DisposableLike__addTo(this), SinkLike__sourceFrom(next), DisposableLike__dispose());
        },
    })), RunnableLike__lift);
})();

export { RunnableLike__concatAll as default };
