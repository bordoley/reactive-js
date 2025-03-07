[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [computations/Observable/effects](../README.md) / \_\_state

# Function: \_\_state()

> **\_\_state**\<`T`\>(`initialState`, `options`?): [`StreamLike`](../../../interfaces/StreamLike.md)\<[`Updater`](../../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>

## Type Parameters

• **T**

## Parameters

### initialState

() => `T`

### options?

#### capacity?

`number`

#### equality?

[`Optional`](../../../../functions/type-aliases/Optional.md)\<[`Equality`](../../../../functions/type-aliases/Equality.md)\<`T`\>\>

#### replay?

`number`

#### scheduler?

[`SchedulerLike`](../../../../utils/interfaces/SchedulerLike.md)

## Returns

[`StreamLike`](../../../interfaces/StreamLike.md)\<[`Updater`](../../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>
