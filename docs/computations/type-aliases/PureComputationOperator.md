[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureComputationOperator

# Type Alias: PureComputationOperator()\<TComputationType, TA, TB\>

> **PureComputationOperator**\<`TComputationType`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../interfaces/ComputationTypeLike.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](ComputationOf.md)\<`TComputationType`, `TA`\>

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`ComputationWithSideEffectsOf`](ComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `never`
