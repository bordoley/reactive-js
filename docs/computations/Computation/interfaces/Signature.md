[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / Signature

# Interface: Signature

## Methods

### areAllDeferred()

> **areAllDeferred**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & DeferredComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & DeferredComputationLike)[]`

***

### areAllMulticasted()

> **areAllMulticasted**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & MulticastComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & MulticastComputationLike)[]`

***

### areAllPure()

> **areAllPure**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & PureComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & PureComputationLike)[]`

***

### areAllSynchronous()

> **areAllSynchronous**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & SynchronousComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & SynchronousComputationLike)[]`

***

### concatMany()

> **concatMany**\<`TComputationType`\>(`m`): [`ConcatManyOperator`](ConcatManyOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"concat"`\>

#### Returns

[`ConcatManyOperator`](ConcatManyOperator.md)\<`TComputationType`\>

***

### concatMap()

> **concatMap**\<`TComputationType`\>(`m`): [`ConcatMapOperator`](ConcatMapOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\> & [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"map"` \| `"concatAll"`\>

#### Returns

[`ConcatMapOperator`](ConcatMapOperator.md)\<`TComputationType`\>

***

### concatMapIterable()

> **concatMapIterable**\<`TComputationType`\>(`m`): [`ConcatMapIterableOperator`](ConcatMapIterableOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\> & [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"map"` \| `"gen"` \| `"genWithSideEffects"` \| `"concatAll"`\>

#### Returns

[`ConcatMapIterableOperator`](ConcatMapIterableOperator.md)\<`TComputationType`\>

***

### concatWith()

> **concatWith**\<`TComputationType`\>(`m`): [`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"concat"`\>

#### Returns

[`ConcatWithOperator`](ConcatWithOperator.md)\<`TComputationType`\>

***

### debug()

> **debug**\<`TComputationType`\>(`m`): \<`T`\>() => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### endWith()

> **endWith**\<`TComputationType`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"fromReadonlyArray"`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### flatMap()

> **flatMap**\<`TComputationType`, `TFlattenKey`\>(`m`): [`FlatMapOperator`](FlatMapOperator.md)\<`TComputationType`, `TFlattenKey`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputationType, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputationType, T\>, T\>; (options: \{ innerType: TInnerLike \}): HigherOrderComputationOperator\<TComputationType, TInnerLike, HigherOrderInnerComputationOf\<TComputationType, TInnerLike, T\>, T\> \} : unknown \}

#### Returns

[`FlatMapOperator`](FlatMapOperator.md)\<`TComputationType`, `TFlattenKey`\>

***

### flatMapAsync()

> **flatMapAsync**\<`TComputationType`, `TFlattenKey`\>(`m`): \<`TA`, `TB`\>(`key`, `selector`) => [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\> & [`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<`TComputationType`\>, `"map"` \| `"fromAsyncFactory"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputationType, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputationType, T\>, T\>; (options: \{ innerType: TInnerLike \}): HigherOrderComputationOperator\<TComputationType, TInnerLike, HigherOrderInnerComputationOf\<TComputationType, TInnerLike, T\>, T\> \} : unknown \}

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### key

`TFlattenKey`

###### selector

(`a`, `options`?) => `Promise`\<`TB`\>

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

***

### flatMapIterable()

> **flatMapIterable**\<`TComputationType`, `TFlattenKey`\>(`m`): [`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputationType`, `TFlattenKey`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"map"` \| `"gen"` \| `"genWithSideEffects"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputationType, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputationType, T\>, T\>; (options: \{ innerType: TInnerLike \}): HigherOrderComputationOperator\<TComputationType, TInnerLike, HigherOrderInnerComputationOf\<TComputationType, TInnerLike, T\>, T\> \} : unknown \}

#### Returns

[`FlatMapIterableOperator`](FlatMapIterableOperator.md)\<`TComputationType`, `TFlattenKey`\>

***

### fromIterable()

> **fromIterable**\<`TComputationType`, `T`\>(`m`, `options`?): [`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"gen"` \| `"genWithSideEffects"`\>

##### options?

`unknown`

#### Returns

[`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputationType`, `T`\>

***

### generate()

> **generate**\<`TComputationType`\>(`m`): \<`T`\>(`generator`, `initialValue`, `options`?) => [`GeneratorOf`](../type-aliases/GeneratorOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"gen"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

###### options?

`unknown`

##### Returns

[`GeneratorOf`](../type-aliases/GeneratorOf.md)\<`TComputationType`, `T`\>

***

### hasSideEffects()

> **hasSideEffects**\<`TComputationType`\>(`computation`): `computation is TComputationType & ComputationWithSideEffectsLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & ComputationWithSideEffectsLike`

***

### ignoreElements()

> **ignoreElements**\<`TComputationType`\>(`m`): \<`T`\>() => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `any`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `any`, `T`\>

***

### isDeferred()

> **isDeferred**\<`TComputationType`\>(`computation`): `computation is TComputationType & DeferredComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & DeferredComputationLike`

***

### isDeferredWithSideEffects()

> **isDeferredWithSideEffects**\<`TComputationType`\>(`computation`): `computation is TComputationType & DeferredComputationWithSideEffectsLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & DeferredComputationWithSideEffectsLike`

***

### isMulticasted()

> **isMulticasted**\<`TComputationType`\>(`computation`): `computation is TComputationType & MulticastComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & MulticastComputationLike`

***

### isPure()

> **isPure**\<`TComputationType`\>(`computation`): `computation is TComputationType & PureComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & PureComputationLike`

***

### isPureDeferred()

> **isPureDeferred**\<`TComputationType`\>(`computation`): `computation is TComputationType & PureDeferredComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & PureDeferredComputationLike`

***

### isPureSynchronous()

> **isPureSynchronous**\<`TComputationType`\>(`computation`): `computation is TComputationType & PureSynchronousComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & PureSynchronousComputationLike`

***

### isSynchronous()

> **isSynchronous**\<`TComputationType`\>(`computation`): `computation is TComputationType & SynchronousComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & SynchronousComputationLike`

***

### isSynchronousWithSideEffects()

> **isSynchronousWithSideEffects**\<`TComputationType`\>(`computation`): `computation is TComputationType & SynchronousComputationWithSideEffectsLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & SynchronousComputationWithSideEffectsLike`

***

### keepType()

> **keepType**\<`TComputationType`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"keep"`\>

#### Returns

`Function`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

***

### log()

> **log**\<`TComputationType`\>(`m`): \<`T`\>() => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### mapTo()

> **mapTo**\<`TComputationType`\>(`m`): \<`T`\>(`value`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `unknown`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"map"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `unknown`, `T`\>

***

### mergeMany()

> **mergeMany**\<`TComputationType`\>(`m`): [`MergeManyOperator`](MergeManyOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

#### Returns

[`MergeManyOperator`](MergeManyOperator.md)\<`TComputationType`\>

***

### mergeWith()

> **mergeWith**\<`TComputationType`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<`TComputationType`\>

***

### notify()

> **notify**\<`TComputationType`\>(`m`): \<`T`\>(`eventListener`) => [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\>, `"forEach"`\>

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### eventListener

[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### pick()

> **pick**\<`TComputationType`\>(`m`): [`PickOperator`](PickOperator.md)\<`TComputationType`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"map"`\>

#### Returns

[`PickOperator`](PickOperator.md)\<`TComputationType`\>

***

### startWith()

> **startWith**\<`TComputationType`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"fromReadonlyArray"`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>
