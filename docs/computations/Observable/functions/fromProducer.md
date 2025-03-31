[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / fromProducer

# Function: fromProducer()

> **fromProducer**\<`T`\>(): \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

## Type Parameters

• **T**

## Returns

`Function`

### Type Parameters

• **TProducer** *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

### Parameters

#### iterable

`TProducer`

### Returns

`TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`
