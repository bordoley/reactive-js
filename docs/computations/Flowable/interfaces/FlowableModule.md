[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Flowable](../README.md) / FlowableModule

# Interface: FlowableModule

## Methods

### dispatchTo()

> **dispatchTo**\<`T`\>(`dispatcher`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### dispatcher

[`DispatcherLike`](../../../utils/interfaces/DispatcherLike.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

***

### fromSynchronousObservable()

> **fromSynchronousObservable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>
