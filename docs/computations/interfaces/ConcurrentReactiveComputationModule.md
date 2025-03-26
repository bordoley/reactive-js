[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md) = [`ComputationType`](../type-aliases/ComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

***

### combineLatest

> **combineLatest**: [`CombineConstructor`](CombineConstructor.md)\<`TComputationType`\>

***

### forkMerge

> **forkMerge**: [`ForkMerge`](../type-aliases/ForkMerge.md)\<`TComputationType`\>

***

### zipLatest

> **zipLatest**: [`CombineConstructor`](CombineConstructor.md)\<`TComputationType`\>

## Methods

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(`options`?): [`FromAsyncIterableOperator`](../type-aliases/FromAsyncIterableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"fromAsyncIterable"`\]

#### Returns

[`FromAsyncIterableOperator`](../type-aliases/FromAsyncIterableOperator.md)\<`TComputationType`, `T`\>

***

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>\>

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): [`FromObservableOperator`](../type-aliases/FromObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

#### Returns

[`FromObservableOperator`](../type-aliases/FromObservableOperator.md)\<`TComputationType`, `T`\>

***

### fromProducer()

> **fromProducer**\<`T`\>(): [`FromProducerOperator`](../type-aliases/FromProducerOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromProducerOperator`](../type-aliases/FromProducerOperator.md)\<`TComputationType`, `T`\>

***

### merge()

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

***

### never()

> **never**\<`T`\>(`options`?): [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"never"`\]

#### Returns

[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `unknown`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\>

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

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\>

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

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

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

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureAsynchronousComputationOperator`](../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>
