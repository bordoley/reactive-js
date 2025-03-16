[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / generate

# Function: generate()

> **generate**\<`TComputationType`\>(`m`): \<`T`\>(`generator`, `initialValue`, `options`?) => [`GeneratorOf`](../type-aliases/GeneratorOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"gen"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

#### options?

`unknown`

### Returns

[`GeneratorOf`](../type-aliases/GeneratorOf.md)\<`TComputationType`, `T`\>
