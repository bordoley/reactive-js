[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`EventSourceModule`](../EventSource/interfaces/EventSourceModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

***

### combineLatest

> **combineLatest**: `CombineConstructor`\<`TComputationType`\>

***

### forkMerge

> **forkMerge**: [`ForkMerge`](ForkMerge.md)\<`TComputationType`\>

***

### fromObservable()

> **fromObservable**: \<`T`\>(`scheduler`) => [`FromObservableOperator`](../type-aliases/FromObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

#### Returns

[`FromObservableOperator`](../type-aliases/FromObservableOperator.md)\<`TComputationType`, `T`\>

***

### zipLatest

> **zipLatest**: `CombineConstructor`\<`TComputationType`\>

## Methods

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`FromAsyncIterableOperator`](../type-aliases/FromAsyncIterableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromAsyncIterableOperator`](../type-aliases/FromAsyncIterableOperator.md)\<`TComputationType`, `T`\>

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

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

> **merge**\<`T`\>(...`computations`): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### never()

> **never**\<`T`\>(): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

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

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

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

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

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

[`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

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

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

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

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TB`\>

##### Returns

[`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>

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

[`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputationType`, `TA`, `T`\>
