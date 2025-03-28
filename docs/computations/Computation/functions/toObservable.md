[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / toObservable

# Function: toObservable()

> **toObservable**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `never`

## Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

## Parameters

### m

`TComputationModule`

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

### Returns

`Function`

#### Type Parameters

• **TComputationBaseOf** *extends* `any`

#### Parameters

##### computation

`TComputationBaseOf`

#### Returns

`TComputationBaseOf` *extends* [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `never`
