[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / stateStore

# Function: stateStore()

> **stateStore**\<`T`\>(`initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

## Type Parameters

• **T**

## Parameters

### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

The initial accumulation value.

### options?

#### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>
