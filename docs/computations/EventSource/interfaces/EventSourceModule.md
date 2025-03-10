[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / EventSourceModule

# Interface: EventSourceModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>

## Methods

### addEventHandler()

> **addEventHandler**\<`T`\>(`handler`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### handler

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### create()

> **create**\<`T`\>(`setup`, `options`?): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>

##### options?

###### autoDispose?

`boolean`

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### empty()

> **empty**\<`T`\>(): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`empty`](../../interfaces/ComputationModule.md#empty)

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromIterable`](../../interfaces/ComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromReadonlyArray`](../../interfaces/ComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromValue`](../../interfaces/ComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`generate`](../../interfaces/ComputationModule.md#generate)

***

### raise()

> **raise**\<`T`\>(`options`?): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`raise`](../../interfaces/ComputationModule.md#raise)
