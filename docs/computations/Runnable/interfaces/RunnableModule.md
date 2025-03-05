[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / RunnableModule

# Interface: RunnableModule

## Extends

- [`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`buffer`](../../interfaces/DeferredReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`catchError`](../../interfaces/DeferredReactiveComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>\>

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`catchError`](../../interfaces/DeferredReactiveComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concatAll`](../../interfaces/DeferredReactiveComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concatAll`](../../interfaces/DeferredReactiveComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/DeferredReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`distinctUntilChanged`](../../interfaces/DeferredReactiveComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`empty`](../../interfaces/DeferredReactiveComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`encodeUtf8`](../../interfaces/DeferredReactiveComputationModule.md#encodeutf8)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`forEach`](../../interfaces/DeferredReactiveComputationModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromIterable`](../../interfaces/DeferredReactiveComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredReactiveComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromValue`](../../interfaces/DeferredReactiveComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`generate`](../../interfaces/DeferredReactiveComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`keep`](../../interfaces/DeferredReactiveComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`last`](../../interfaces/DeferredReactiveComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`map`](../../interfaces/DeferredReactiveComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`pairwise`](../../interfaces/DeferredReactiveComputationModule.md#pairwise)

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`raise`](../../interfaces/DeferredReactiveComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`reduce`](../../interfaces/DeferredReactiveComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`retry`](../../interfaces/DeferredReactiveComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scan`](../../interfaces/DeferredReactiveComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`skipFirst`](../../interfaces/DeferredReactiveComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeFirst`](../../interfaces/DeferredReactiveComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeLast`](../../interfaces/DeferredReactiveComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeWhile`](../../interfaces/DeferredReactiveComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredReactiveComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`toReadonlyArray`](../../interfaces/DeferredReactiveComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`toRunnable`](../../interfaces/DeferredReactiveComputationModule.md#torunnable)
