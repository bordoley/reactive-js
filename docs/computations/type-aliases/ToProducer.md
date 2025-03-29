[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ToProducer

# Type Alias: ToProducer()\<TComputationType, T\>

> **ToProducer**\<`TComputationType`, `T`\>: \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureProducerLike`](../interfaces/PureProducerLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`ProducerWithSideEffectsLike`](../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Parameters

### computation

`TComputationBaseOf`

## Returns

`TComputationBaseOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureProducerLike`](../interfaces/PureProducerLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`ProducerWithSideEffectsLike`](../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`
