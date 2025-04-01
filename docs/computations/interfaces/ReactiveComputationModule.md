[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ReactiveComputationModule

# Interface: ReactiveComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)
- [`SynchronousObservableModule`](../SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

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

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

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

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

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

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

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

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

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

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

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

***

### forkMerge()

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### c

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### c

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### c

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### d

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### b

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### c

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### d

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TIn`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TIn`, `TOut`\>

***

### merge()

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TA`, `T`\>

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

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

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

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

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

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

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

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

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

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

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

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
