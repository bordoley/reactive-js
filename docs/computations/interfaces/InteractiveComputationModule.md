[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / InteractiveComputationModule

# Interface: InteractiveComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TComputationOf`\>(`iter`) => `TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) & [`SynchronousComputationLike`](SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`PureObservableLike`](PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toObservable"`\]

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationLike`](ComputationLike.md) & [`PureComputationLike`](PureComputationLike.md) \| [`ComputationLike`](ComputationLike.md) & [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md)

##### Parameters

###### iter

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) & [`SynchronousComputationLike`](SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`PureObservableLike`](PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md)\<`T`\> : `never`

***

### zip()

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TB`\>

###### c

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TC`\>

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TB`\>

###### c

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TC`\>

###### d

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TD`\>

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TB`\>

###### c

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TC`\>

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TB`\>

###### c

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TC`\>

###### d

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TD`\>

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>
