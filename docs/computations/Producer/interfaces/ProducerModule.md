[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / ProducerModule

# Interface: ProducerModule

## Methods

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

### toEventSource()

> **toEventSource**(`readable`): [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`Uint8Array`\<`ArrayBufferLike`\>\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Parameters

##### readable

`Readable`

#### Returns

[`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`Uint8Array`\<`ArrayBufferLike`\>\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)
