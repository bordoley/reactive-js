[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / EventSourceModule

# Interface: EventSourceModule

## Extends

- [`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>

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

> **create**\<`T`\>(`setup`): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Overrides

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromIterable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromiterable)

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

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromReadonlyArray`](../../interfaces/ConcurrentReactiveComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Overrides

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromValue`](../../interfaces/ConcurrentReactiveComputationModule.md#fromvalue)

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

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`generate`](../../interfaces/ConcurrentReactiveComputationModule.md#generate)
