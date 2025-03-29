[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / startWith

# Function: startWith()

> **startWith**\<`TComputationModule`\>(`m`): \<`T`\>(`value`, ...`values`) => [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>

## Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"concat"` \| `"genPure"`\>

## Parameters

### m

`TComputationModule`

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### value

`T`

#### values

...readonly `T`[]

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>
