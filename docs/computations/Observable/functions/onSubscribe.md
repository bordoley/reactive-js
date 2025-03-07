[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / onSubscribe

# Function: onSubscribe()

> **onSubscribe**\<`T`\>(`f`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### f

[`SideEffect`](../../../functions/type-aliases/SideEffect.md) | [`Factory`](../../../functions/type-aliases/Factory.md)\<[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\> \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
