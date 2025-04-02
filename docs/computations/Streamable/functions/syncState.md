[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / syncState

# Function: syncState()

> **syncState**\<`T`, `TStream`\>(`onInit`, `onChange`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>\>

## Type Parameters

• **T**

• **TStream** *extends* [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>

## Parameters

### onInit

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

### onChange

[`Function2`](../../../functions/type-aliases/Function2.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

### options?

#### throttleDuration?

`number`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>\>
