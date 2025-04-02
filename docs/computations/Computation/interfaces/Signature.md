[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / Signature

# Interface: Signature

## Methods

### areAllPure()

> **areAllPure**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & PureComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & PureComputationLike)[]`

***

### areAllSynchronous()

> **areAllSynchronous**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & { [ComputationLike_isSynchronous]: Optional<true> })[]`

#### Type Parameters

• **TComputationType** *extends* `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & { [ComputationLike_isSynchronous]: Optional<true> })[]`

***

### concatWith()

#### Call Signature

> **concatWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

##### Parameters

###### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"`\>

###### snd

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

###### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **concatWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

##### Parameters

###### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"`\>

###### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>

###### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### empty()

> **empty**\<`TComputationType`, `T`\>(`m`, `type`?): [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

##### type?

`T`

#### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### endWith()

> **endWith**\<`TComputationType`, `T`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`TComputationType`, `TComputationModule`\>(`m`, `options`?): \<`T`\>(`arr`) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

##### options?

`object` & `Parameters`\<`TComputationModule`\[`"genPure"`\]\>\[`1`\]

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### arr

readonly `T`[]

##### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

***

### isDeferred()

> **isDeferred**\<`TComputationType`\>(`computation`): `computation is TComputationType & { [ComputationLike_isDeferred]: Optional<true> }`

#### Type Parameters

• **TComputationType** *extends* `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\> = `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & { [ComputationLike_isDeferred]: Optional<true> }`

***

### isPure()

> **isPure**\<`TComputationType`\>(`computation`): `computation is TComputationType & PureComputationLike`

#### Type Parameters

• **TComputationType** *extends* `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\> = `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & PureComputationLike`

***

### isSynchronous()

> **isSynchronous**\<`TComputationType`\>(`computation`): `computation is TComputationType & { [ComputationLike_isSynchronous]: Optional<true> }`

#### Type Parameters

• **TComputationType** *extends* `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\> = `Partial`\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & { [ComputationLike_isSynchronous]: Optional<true> }`

***

### makeModule()

> **makeModule**\<`TComputationModule`, `TKey`\>(`o`): `Pick`\<`TComputationModule`, `TKey`\> & `object`

#### Type Parameters

• **TComputationModule** *extends* [`ComputationModuleLike`](../../interfaces/ComputationModuleLike.md)\<[`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>\>

• **TKey** *extends* `string` \| `number` \| `symbol` = keyof `NonNullable`\<`TComputationModule`\>

#### Parameters

##### o

`Pick`\<`TComputationModule`, `TKey`\>

#### Returns

`Pick`\<`TComputationModule`, `TKey`\> & `object`

***

### mergeWith()

#### Call Signature

> **mergeWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

##### Parameters

###### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

###### snd

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

###### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **mergeWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

##### Parameters

###### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

###### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>

###### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### ofValues()

> **ofValues**\<`TComputationType`, `T`\>(`m`, `value`, ...`values`): [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

##### value

`T`

##### values

...`T`[]

#### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### raise()

> **raise**\<`TComputationType`, `T`\>(`m`, `options`?, `type`?): [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### type?

`T`

#### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### startWith()

> **startWith**\<`TComputationType`, `T`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

#### Parameters

##### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>
