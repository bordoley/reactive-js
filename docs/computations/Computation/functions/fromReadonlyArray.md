[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / fromReadonlyArray

# Function: fromReadonlyArray()

## Call Signature

> **fromReadonlyArray**\<`TComputationType`, `TComputationModule`\>(`m`, `options`?): \<`T`\>(`arr`) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md)\<`TComputationType`\>, `"genPure"`\>

### Parameters

#### m

`TComputationModule`

#### options?

##### count?

`number`

##### delay?

`number`

##### delayStart?

`boolean`

##### start?

`number`

### Returns

`Function`

#### Type Parameters

• **T**

#### Parameters

##### arr

readonly `T`[]

#### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

## Call Signature

> **fromReadonlyArray**\<`TComputationType`, `TComputationModule`\>(`m`, `options`?): \<`T`\>(`arr`) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

### Parameters

#### m

`TComputationModule`

#### options?

##### count?

`number`

##### start?

`number`

### Returns

`Function`

#### Type Parameters

• **T**

#### Parameters

##### arr

readonly `T`[]

#### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>
