[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / notify

# Function: notify()

> **notify**\<`TComputation`\>(`m`): \<`T`\>(`eventListener`) => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"forEach"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### eventListener

[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>
