[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / notify

# Function: notify()

> **notify**\<`TComputationType`\>(`m`): \<`T`\>(`eventListener`) => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"forEach"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### eventListener

[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>
