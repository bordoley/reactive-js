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

> **concatWith**\<`TComputationType`, `TComputationModule`\>(`m`): [`ConcatWithOperator`](ConcatWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

[`ConcatWithOperator`](ConcatWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

***

### empty()

> **empty**\<`TComputationType`, `TComputationModule`\>(`m`): \<`T`\>() => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

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

### endWith()

> **endWith**\<`T`, `TComputationType`, `TComputationModule`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>

#### Type Parameters

• **T**

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>

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

> **makeModule**\<`TComputationType`\>(): \<`TModule`\>(`o`) => `TModule` & `object`

#### Type Parameters

• **TComputationType**

#### Returns

`Function`

##### Type Parameters

• **TModule** *extends* `object` = \{\}

##### Parameters

###### o

`TModule`

##### Returns

`TModule` & `object`

***

### mergeWith()

> **mergeWith**\<`TComputationType`, `TComputationModule`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

***

### raise()

> **raise**\<`TComputationType`, `TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

***

### startWith()

> **startWith**\<`T`, `TComputationType`, `TComputationModule`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>

#### Type Parameters

• **T**

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>
