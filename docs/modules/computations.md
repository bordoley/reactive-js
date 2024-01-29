[Reactive-JS](../README.md) / computations

# Module: computations

## Table of contents

### Interfaces

- [Computation](../interfaces/computations.Computation.md)
- [DeferredComputationModule](../interfaces/computations.DeferredComputationModule.md)
- [Pick](../interfaces/computations.Pick.md)
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
- [sequence](computations.md#sequence)

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

▸ **keepType**<`C`\>(`keep`): <TA, TB\>(`predicate`: [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keep` | <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `T`, `T`\> |

#### Returns

`fn`

▸ <`TA`, `TB`\>(`predicate`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

##### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`\>(`map`): <T\>(`value`: `T`) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |

#### Returns

`fn`

▸ <`T`\>(`value`): [`ComputationOperator`](computations.md#computationoperator)<`C`, `unknown`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

[`ComputationOperator`](computations.md#computationoperator)<`C`, `unknown`, `T`\>

___

### pick

▸ **pick**<`C`\>(`map`): [`Pick`](../interfaces/computations.Pick.md)<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | <TA, TB\>(`selector`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ComputationOperator`](computations.md#computationoperator)<`C`, `TA`, `TB`\> |

#### Returns

[`Pick`](../interfaces/computations.Pick.md)<`C`\>

___

### sequence

▸ **sequence**<`C`\>(`generate`): (`start`: `number`) => [`ComputationOf`](computations.md#computationof)<`C`, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computations.Computation.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generate` | <T\>(`generator`: [`Updater`](functions.md#updater)<`T`\>, `initialValue`: [`Factory`](functions.md#factory)<`T`\>) => [`ComputationOf`](computations.md#computationof)<`C`, `T`\> |

#### Returns

`fn`

▸ (`start`): [`ComputationOf`](computations.md#computationof)<`C`, `number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

##### Returns

[`ComputationOf`](computations.md#computationof)<`C`, `number`\>
