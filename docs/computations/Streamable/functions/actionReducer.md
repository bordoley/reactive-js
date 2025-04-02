[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / actionReducer

# Function: actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StateStoreStreamLike`](../interfaces/StateStoreStreamLike.md)\<`TAction`, `T`\>\>

## Type Parameters

• **TAction**

• **T**

## Parameters

### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`TAction`, `T`\>

### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

### options?

#### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StateStoreStreamLike`](../interfaces/StateStoreStreamLike.md)\<`TAction`, `T`\>\>
