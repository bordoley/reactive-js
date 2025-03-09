[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<TComputation\>

## Extended by

- [`EventSourceModule`](../EventSource/interfaces/EventSourceModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>\>

***

### merge()

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

***

### never()

> **never**\<`T`\>(): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `TB`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `TB`\>

##### Returns

[`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`StatefulAsynchronousComputationOperator`](../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `TB`\>

##### Returns

[`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputation`, `TA`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputation`, `TB`\>

###### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`StatelessAsynchronousComputationOperator`](../type-aliases/StatelessAsynchronousComputationOperator.md)\<`TComputation`, `TA`, `T`\>
