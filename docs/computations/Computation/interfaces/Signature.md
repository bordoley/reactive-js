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

> **concat**\<`Type`, `TComputation`\>(`m`): \<`T`\>(...`computations`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### computations

...[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### concatMap()

> **concatMap**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`selector`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"map"` \| `"concatAll"`\>

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `TB`\>\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

***

### concatMapIterable()

> **concatMapIterable**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`selector`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"map"` \| `"fromIterable"` \| `"concatAll"`\>

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

***

### concatWith()

> **concatWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`snd`, ...`tail`) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

###### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

***

### endWith()

> **endWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

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

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

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

> **ignoreElements**\<`Type`, `TComputation`\>(`m`): \<`T`\>() => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `any`, `T`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`Type`, `TComputation`\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `any`, `T`\>

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

> **keepType**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

#### Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`Type`, `TComputation`\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

***

### mapTo()

> **mapTo**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`value`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `unknown`, `T`\>

#### Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`Type`, `TComputation`\>, `"map"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `unknown`, `T`\>

***

### merge()

> **merge**\<`Type`, `TComputation`\>(`m`): \<`T`\>(...`computations`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **Type** *extends* [`ReactiveComputationLike`](../../interfaces/ReactiveComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`Type`, `TComputation`\>, `"mergeMany"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### computations

...[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### mergeWith()

> **mergeWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`snd`, ...`tail`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **Type** *extends* [`ReactiveComputationLike`](../../interfaces/ReactiveComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`Type`, `TComputation`\>, `"mergeMany"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

###### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### pick()

> **pick**\<`Type`, `TComputation`\>(`m`): [`PickOperator`](PickOperator.md)\<`Type`, `TComputation`\>

#### Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`Type`, `TComputation`\>, `"map"`\>

#### Returns

[`PickOperator`](PickOperator.md)\<`Type`, `TComputation`\>

***

### sequence()

> **sequence**\<`Type`, `TComputation`\>(`m`): (`start`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"generate"`\>

#### Returns

`Function`

##### Parameters

###### start

`number`

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>

***

### startWith()

> **startWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

#### Parameters

##### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

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

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>
