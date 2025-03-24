[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromIterableOperator

# Type Alias: FromIterableOperator()\<TComputationType, T\>

> **FromIterableOperator**\<`TComputationType`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md)\<`T`\> ? `FromPureIterableOf`\<`TComputationType`, `T`\> : `TIterable` *extends* [`IterableWithSideEffectsLike`](../interfaces/IterableWithSideEffectsLike.md)\<`T`\> ? `FromIterableWithSideEffectsOf`\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`IterableLike`](../interfaces/IterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md)\<`T`\> ? `FromPureIterableOf`\<`TComputationType`, `T`\> : `TIterable` *extends* [`IterableWithSideEffectsLike`](../interfaces/IterableWithSideEffectsLike.md)\<`T`\> ? `FromIterableWithSideEffectsOf`\<`TComputationType`, `T`\> : `never`
