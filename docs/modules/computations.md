[Reactive-JS](../README.md) / computations

# Module: computations

## Table of contents

### Interfaces

- [Computation](../interfaces/computations.Computation.md)
- [DeferredComputationModule](../interfaces/computations.DeferredComputationModule.md)
- [PureStatefulComputationModule](../interfaces/computations.PureStatefulComputationModule.md)
- [PureStatelessComputationModule](../interfaces/computations.PureStatelessComputationModule.md)

### Type Aliases

- [ComputationOf](computations.md#computationof)
- [ComputationOperator](computations.md#computationoperator)

### Variables

- [Computation\_T](computations.md#computation_t)
- [Computation\_type](computations.md#computation_type)

### Functions

- [keepType](computations.md#keeptype)
- [mapTo](computations.md#mapto)
- [pick](computations.md#pick)

## Type Aliases

### ComputationOf

Ƭ **ComputationOf**<`C`, `T`\>: `C` extends { `[Computation_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[Computation_T]`: `T`  }[typeof [`Computation_type`](computations.md#computation_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `T` | `T` |

___

### ComputationOperator

Ƭ **ComputationOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ComputationOf`](computations.md#computationof)<`C`, `TA`\>, [`ComputationOf`](computations.md#computationof)<`C`, `TB`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `TA` | `TA` |
| `TB` | `TB` |

## Variables

### Computation\_T

• `Const` **Computation\_T**: unique `symbol`

___

### Computation\_type

• `Const` **Computation\_type**: unique `symbol`

## Functions

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`keep`, `predicate`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keep` | <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `T`\>(`map`, `value`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |
| `value` | `T` |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `unknown`, `T`\>

___

### pick

▸ **pick**<`C`, `T`, `TKeyOfT`\>(`map`, `key`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfT`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `T` | `T` |
| `TKeyOfT` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |
| `key` | `TKeyOfT` |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfT`]\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`\>(`map`, `keyA`, `keyB`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`map`, `keyA`, `keyB`, `keyC`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |
| `keyC` | `TKeyOfTC` |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>
