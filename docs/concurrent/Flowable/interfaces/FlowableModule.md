[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Flowable](../README.md) / FlowableModule

# Interface: FlowableModule

## Methods

### create()

> **create**\<`T`\>(`op`): [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`boolean`\>, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

#### Returns

[`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>

***

### dispatchTo()

> **dispatchTo**\<`T`\>(`dispatcher`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### dispatcher

[`DispatcherLike`](../../interfaces/DispatcherLike.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

***

### fromSynchronousObservable()

> **fromSynchronousObservable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`FlowableLike`](../../interfaces/FlowableLike.md)\<`T`\>\>
