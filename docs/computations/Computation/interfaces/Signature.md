[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / Signature

# Interface: Signature

## Methods

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

### empty()

> **empty**\<`TComputationModule`\>(`m`): \<`T`\>() => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationModule** *extends* `Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, *typeof* [`ComputationModuleLike_computationType`](../../variables/ComputationModuleLike_computationType.md) \| `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>

#### Type Parameters

• **TComputationModule** *extends* `Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, *typeof* [`ComputationModuleLike_computationType`](../../variables/ComputationModuleLike_computationType.md) \| `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`object` & `Parameters`\<`TComputationModule`\[`"genPure"`\]\>\[`1`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>

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

### mergeWith()

> **mergeWith**\<`TComputationModule`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

#### Type Parameters

• **TComputationModule** *extends* `Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ComputationType`](../../type-aliases/ComputationType.md), \{\}\>, *typeof* [`ComputationModuleLike_computationType`](../../variables/ComputationModuleLike_computationType.md) \| `"merge"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>
