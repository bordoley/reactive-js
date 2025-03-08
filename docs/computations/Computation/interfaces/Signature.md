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

### concatMany()

> **concatMany**\<`TComputation`\>(`m`): [`ConcatManyOperator`](ConcatManyOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"concat"`\>

#### Returns

[`ConcatManyOperator`](ConcatManyOperator.md)\<`TComputation`\>

***

### concatMap()

> **concatMap**\<`TComputation`\>(`m`): [`FlatMapOperator`](FlatMapOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"` \| `"concatAll"`\>

#### Returns

[`FlatMapOperator`](FlatMapOperator.md)\<`TComputation`\>

***

### concatMapIterable()

> **concatMapIterable**\<`TComputation`\>(`m`): [`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"` \| `"concatAll"`\>

#### Returns

[`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputation`\>

***

### concatWith()

> **concatWith**\<`TComputation`\>(`m`): [`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"concat"`\>

#### Returns

[`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputation`\>

***

### debug()

> **debug**\<`TComputation`\>(`m`): \<`T`\>() => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

***

### endWith()

> **endWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"concat"` \| `"fromReadonlyArray"`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### flatMap()

> **flatMap**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`FlatMapOperator`](FlatMapOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} \}

##### key

`TFlattenKey`

#### Returns

[`FlatMapOperator`](FlatMapOperator.md)\<`TComputation`\>

***

### flatMapIterable()

> **flatMapIterable**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} \}

##### key

`TFlattenKey`

#### Returns

[`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputation`\>

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

> **ignoreElements**\<`TComputation`\>(`m`): \<`T`\>() => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `any`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `any`, `T`\>

***

### isDeferred()

> **isDeferred**\<`TComputation`\>(`computation`): `computation is TComputation & DeferredComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & DeferredComputationLike`

***

### isDeferredWithSideEffects()

> **isDeferredWithSideEffects**\<`TComputation`\>(`computation`): `computation is TComputation & DeferredComputationWithSideEffectsLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & DeferredComputationWithSideEffectsLike`

***

### isMulticasted()

> **isMulticasted**\<`TComputation`\>(`computation`): `computation is TComputation & MulticastComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & MulticastComputationLike`

***

### isPure()

> **isPure**\<`TComputation`\>(`computation`): `computation is TComputation & PureComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureComputationLike`

***

### isPureDeferred()

> **isPureDeferred**\<`TComputation`\>(`computation`): `computation is TComputation & PureDeferredComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureDeferredComputationLike`

***

### isPureSynchronous()

> **isPureSynchronous**\<`TComputation`\>(`computation`): `computation is TComputation & PureSynchronousComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & PureSynchronousComputationLike`

***

### isSynchronous()

> **isSynchronous**\<`TComputation`\>(`computation`): `computation is TComputation & SynchronousComputationLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & SynchronousComputationLike`

***

### isSynchronousWithSideEffects()

> **isSynchronousWithSideEffects**\<`TComputation`\>(`computation`): `computation is TComputation & SynchronousComputationWithSideEffectsLike`

#### Type Parameters

• **TComputation** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputation`

#### Returns

`computation is TComputation & SynchronousComputationWithSideEffectsLike`

***

### keepType()

> **keepType**\<`TComputation`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

***

### log()

> **log**\<`TComputation`\>(`m`): \<`T`\>() => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

***

### mapTo()

> **mapTo**\<`TComputation`\>(`m`): \<`T`\>(`value`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `unknown`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `unknown`, `T`\>

***

### mergeMany()

> **mergeMany**\<`TComputation`\>(`m`): [`MergeManyOperator`](MergeManyOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputation`\>, `"merge"`\>

#### Returns

[`MergeManyOperator`](MergeManyOperator.md)\<`TComputation`\>

***

### mergeWith()

> **mergeWith**\<`TComputation`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputation`\>, `"merge"`\>

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<`TComputation`\>

***

### notify()

> **notify**\<`TComputation`\>(`m`): \<`T`\>(`eventListener`) => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### eventListener

[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

***

### pick()

> **pick**\<`TComputation`\>(`m`): [`PickOperator`](PickOperator.md)\<`TComputation`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\>

#### Returns

[`PickOperator`](PickOperator.md)\<`TComputation`\>

***

### sequence()

> **sequence**\<`TComputation`\>(`m`): (`start`) => [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `number`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"generate"`\>

#### Returns

`Function`

##### Parameters

###### start

`number`

##### Returns

[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `number`\>

***

### startWith()

> **startWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"concat"` \| `"fromReadonlyArray"`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>
