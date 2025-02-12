[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / StreamableModule

# Interface: StreamableModule

## Methods

### actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TAction`, `T`\>\>

#### Type Parameters

• **TAction**

• **T**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`TAction`, `T`\>

##### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### equality

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TAction`, `T`\>\>

***

### animation()

> **animation**\<`T`, `TEvent`\>(`animation`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>\>

#### Type Parameters

• **T**

• **TEvent** = `unknown`

#### Parameters

##### animation

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

##### options?

###### animationScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>\>

***

### animationGroup()

> **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationGroupStreamLike`](../../interfaces/AnimationGroupStreamLike.md)\<`T`, `TEvent`, `TKey`\>\>

#### Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

#### Parameters

##### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### options?

###### animationScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationGroupStreamLike`](../../interfaces/AnimationGroupStreamLike.md)\<`T`, `TEvent`, `TKey`\>\>

***

### create()

> **create**\<`TReq`, `T`\>(`op`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TReq`, `T`\>\>

#### Type Parameters

• **TReq**

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TReq`\>, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TReq`, `T`\>\>

***

### identity()

> **identity**\<`T`\>(): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`T`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`T`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`T`, `T`\>\>

***

### stateStore()

> **stateStore**\<`T`\>(`initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type Parameters

• **T**

#### Parameters

##### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

The initial accumulation value.

##### options?

###### equality

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>

***

### syncState()

> **syncState**\<`T`\>(`onInit`, `onChange`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### onInit

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

##### onChange

[`Function2`](../../../functions/type-aliases/Function2.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

##### options?

###### throttleDuration

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>\>
