[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / ProducerModule

# Interface: ProducerModule

## Methods

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### autoDispose?

`boolean`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### create()

> **create**\<`T`\>(`f`): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

(`consumer`) => `void`

#### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\>

***

### toObservable()

> **toObservable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>
