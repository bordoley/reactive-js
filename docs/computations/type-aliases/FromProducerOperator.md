[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromProducerOperator

# Type Alias: FromProducerOperator()\<TComputationType, T\>

> **FromProducerOperator**\<`TComputationType`, `T`\>: \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureProducerLike`](../interfaces/PureProducerLike.md) ? `FromPureDeferredOf`\<`TComputationType`, `T`\> : `TProducer` *extends* [`ProducerWithSideEffectsLike`](../interfaces/ProducerWithSideEffectsLike.md) ? `FromDeferredWithSideEffectOf`\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TProducer** *extends* [`ProducerLike`](../interfaces/ProducerLike.md)\<`T`\>

## Parameters

### iterable

`TProducer`

## Returns

`TProducer` *extends* [`PureProducerLike`](../interfaces/PureProducerLike.md) ? `FromPureDeferredOf`\<`TComputationType`, `T`\> : `TProducer` *extends* [`ProducerWithSideEffectsLike`](../interfaces/ProducerWithSideEffectsLike.md) ? `FromDeferredWithSideEffectOf`\<`TComputationType`, `T`\> : `never`
