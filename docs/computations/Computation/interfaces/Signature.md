[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / Signature

# Interface: Signature

## Methods

### areAllDeferred()

> **areAllDeferred**\<`TComputation`\>(`computations`): `computations is readonly (TComputation & DeferredComputationLike)[]`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputation`[]

#### Returns

`computations is readonly (TComputation & DeferredComputationLike)[]`

***

### areAllInteractive()

> **areAllInteractive**\<`TComputation`\>(`computations`): `computations is readonly (TComputation & InteractiveComputationLike)[]`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputation`[]

#### Returns

`computations is readonly (TComputation & InteractiveComputationLike)[]`

***

### areAllMulticasted()

> **areAllMulticasted**\<`TComputation`\>(`computations`): `computations is readonly (TComputation & MulticastComputationLike)[]`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputation`[]

#### Returns

`computations is readonly (TComputation & MulticastComputationLike)[]`

***

### areAllPure()

> **areAllPure**\<`TComputation`\>(`computations`): `computations is readonly (TComputation & PureComputationLike)[]`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputation`[]

#### Returns

`computations is readonly (TComputation & PureComputationLike)[]`

***

### areAllSynchronous()

> **areAllSynchronous**\<`TComputation`\>(`computations`): `computations is readonly (TComputation & SynchronousComputationLike)[]`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputation`[]

#### Returns

`computations is readonly (TComputation & SynchronousComputationLike)[]`

***

### concat()

> **concat**\<`TComputation`\>(`m`): [`ConcatOperator`](ConcatOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concatMany"`\>

#### Returns

[`ConcatOperator`](ConcatOperator.md)\<`TComputation`\>

***

### concatMap()

> **concatMap**\<`TComputation`\>(`m`): [`ConcatMapOperator`](ConcatMapOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"map"` \| `"concatAll"`\>

#### Returns

[`ConcatMapOperator`](ConcatMapOperator.md)\<`TComputation`\>

***

### concatMapIterable()

> **concatMapIterable**\<`TComputation`\>(`m`): [`ConcatMapIterableOperator`](ConcatMapIterableOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"` \| `"concatAll"`\>

#### Returns

[`ConcatMapIterableOperator`](ConcatMapIterableOperator.md)\<`TComputation`\>

***

### concatWith()

> **concatWith**\<`TComputation`\>(`m`): [`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concatMany"`\>

#### Returns

[`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputation`\>

***

### endWith()

> **endWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

###### values

...readonly `T`[]

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### hasSideEffects()

> **hasSideEffects**\<`TComputation`\>(`computation`): `computation is TComputation & ComputationWithSideEffectsLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & ComputationWithSideEffectsLike`

***

### ignoreElements()

> **ignoreElements**\<`TComputation`\>(`m`): \<`T`\>() => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `any`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `any`, `T`\>

***

### isDeferred()

> **isDeferred**\<`TComputation`\>(`computation`): `computation is TComputation & DeferredComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & DeferredComputationLike`

***

### isDeferredWithSideEffects()

> **isDeferredWithSideEffects**\<`TComputation`\>(`computation`): `computation is TComputation & DeferredComputationWithSideEffectsLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & DeferredComputationWithSideEffectsLike`

***

### isInteractive()

> **isInteractive**\<`TComputation`\>(`computation`): `computation is TComputation & InteractiveComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & InteractiveComputationLike`

***

### isMulticasted()

> **isMulticasted**\<`TComputation`\>(`computation`): `computation is TComputation & MulticastComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & MulticastComputationLike`

***

### isPure()

> **isPure**\<`TComputation`\>(`computation`): `computation is TComputation & PureComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureComputationLike`

***

### isPureDeferred()

> **isPureDeferred**\<`TComputation`\>(`computation`): `computation is TComputation & PureDeferredComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureDeferredComputationLike`

***

### isPureSynchronous()

> **isPureSynchronous**\<`TComputation`\>(`computation`): `computation is TComputation & PureSynchronousComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureSynchronousComputationLike`

***

### isReactive()

> **isReactive**\<`TComputation`\>(`computation`): `computation is TComputation & ReactiveComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & ReactiveComputationLike`

***

### isSynchronous()

> **isSynchronous**\<`TComputation`\>(`computation`): `computation is TComputation & SynchronousComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & SynchronousComputationLike`

***

### isSynchronousReactive()

> **isSynchronousReactive**\<`TComputation`\>(`computation`): `computation is TComputation & SynchronousReactiveComputation`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & SynchronousReactiveComputation`

***

### isSynchronousWithSideEffects()

> **isSynchronousWithSideEffects**\<`TComputation`\>(`computation`): `computation is TComputation & SynchronousComputationWithSideEffectsLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & SynchronousComputationWithSideEffectsLike`

***

### keepType()

> **keepType**\<`TComputation`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

***

### mapTo()

> **mapTo**\<`TComputation`\>(`m`): \<`T`\>(`value`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `unknown`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `unknown`, `T`\>

***

### merge()

> **merge**\<`TComputation`\>(`m`): [`MergeOperator`](MergeOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputation`\>, `"mergeMany"`\>

#### Returns

[`MergeOperator`](MergeOperator.md)\<`TComputation`\>

***

### mergeWith()

> **mergeWith**\<`TComputation`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputation`\>, `"mergeMany"`\>

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<`TComputation`\>

***

### pick()

> **pick**\<`TComputation`\>(`m`): [`PickOperator`](PickOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\>

#### Returns

[`PickOperator`](PickOperator.md)\<`TComputation`\>

***

### sequence()

> **sequence**\<`TComputation`\>(`m`): (`start`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `number`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"generate"`\>

#### Returns

`Function`

##### Parameters

###### start

`number`

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `number`\>

***

### startWith()

> **startWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

###### values

...readonly `T`[]

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>
