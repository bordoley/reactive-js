[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / StreamableModule

# Interface: StreamableModule

## Methods

### actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StateStoreStreamLike`](StateStoreStreamLike.md)\<`TAction`, `T`\>\>

#### Type Parameters

• **TAction**

• **T**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`TAction`, `T`\>

##### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TAction`, `T`, [`StateStoreStreamLike`](StateStoreStreamLike.md)\<`TAction`, `T`\>\>

***

### animation()

#### Call Signature

> **animation**\<`T`\>(`animation`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `T`, [`AnimationLike`](AnimationLike.md)\<`void`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### animation

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `T`, [`AnimationLike`](AnimationLike.md)\<`void`, `T`\>\>

#### Call Signature

> **animation**\<`T`, `TEvent`\>(`animation`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `T`, [`AnimationLike`](AnimationLike.md)\<`TEvent`, `T`\>\>

##### Type Parameters

• **T**

• **TEvent**

##### Parameters

###### animation

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

##### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `T`, [`AnimationLike`](AnimationLike.md)\<`TEvent`, `T`\>\>

***

### animationGroup()

#### Call Signature

> **animationGroup**\<`T`, `TKey`\>(`animationGroup`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `void`, [`AnimationGroupLike`](AnimationGroupLike.md)\<`void`, `TKey`, `T`\>\>

##### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

##### Parameters

###### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

##### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `void`, [`AnimationGroupLike`](AnimationGroupLike.md)\<`void`, `TKey`, `T`\>\>

#### Call Signature

> **animationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `void`, [`AnimationGroupLike`](AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

##### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

##### Parameters

###### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

##### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `void`, [`AnimationGroupLike`](AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

***

### create()

> **create**\<`TReq`, `T`\>(`op`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TReq`, `T`\>\>

#### Type Parameters

• **TReq**

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TReq`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

### spring()

> **spring**(`options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`SpringEvent`](../type-aliases/SpringEvent.md), `number`, [`SpringLike`](SpringLike.md)\>

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`SpringEvent`](../type-aliases/SpringEvent.md), `number`, [`SpringLike`](SpringLike.md)\>

***

### stateStore()

> **stateStore**\<`T`\>(`initialState`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StateStoreStreamLike`](StateStoreStreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>

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

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, [`StateStoreStreamLike`](StateStoreStreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>\>

***

### syncState()

> **syncState**\<`T`, `TStream`\>(`onInit`, `onChange`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>\>

#### Type Parameters

• **T**

• **TStream** *extends* [`StreamLike`](../../interfaces/StreamLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>

#### Parameters

##### onInit

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

##### onChange

[`Function2`](../../../functions/type-aliases/Function2.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>\>\>

##### options?

###### throttleDuration?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>, [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>, `T`, `TStream`\>\>
