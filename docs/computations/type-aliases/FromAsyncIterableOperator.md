[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromAsyncIterableOperator

# Type Alias: FromAsyncIterableOperator()\<TComputationType, T\>

> **FromAsyncIterableOperator**\<`TComputationType`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? `FromPureAsyncIterableOf`\<`TComputationType`, `T`\> : `TIterable` *extends* [`AsyncIterableWithSideEffectsLike`](../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> ? `FromAsyncIterableWithSideEffectsOf`\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`AsyncIterableLike`](../interfaces/AsyncIterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? `FromPureAsyncIterableOf`\<`TComputationType`, `T`\> : `TIterable` *extends* [`AsyncIterableWithSideEffectsLike`](../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> ? `FromAsyncIterableWithSideEffectsOf`\<`TComputationType`, `T`\> : `never`
