[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationOperator

# Type Alias: ComputationOperator()\<TComputation, TA, TB\>

> **ComputationOperator**\<`TComputation`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TA`\> ? [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TB`\> : [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

## Type Parameters

• **TComputation** *extends* [`Computation`](Computation.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](ComputationOf.md)\<`TComputation`, `TA`\>

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TA`\> ? [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TB`\> : [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>
