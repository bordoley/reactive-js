[Reactive-JS](../README.md) / [core](core.md) / KeyedContainers

# Namespace: KeyedContainers

[core](core.md).KeyedContainers

## Table of contents

### Interfaces

- [TypeClass](../interfaces/core.KeyedContainers.TypeClass.md)

### Type Aliases

- [KeyOf](core.KeyedContainers.md#keyof)
- [Of](core.KeyedContainers.md#of)
- [Operator](core.KeyedContainers.md#operator)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof [`KeyedContainer_TKey`](core.md#keyedcontainer_tkey)]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainers`](../interfaces/core.KeyedContainers-1.md) |

___

### Of

Ƭ **Of**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof [`Container_type`](core.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.KeyedContainers.md#of)<`C`, `TKey`, `TA`\>, [`Of`](core.KeyedContainers.md#of)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainers`](../interfaces/core.KeyedContainers-1.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |
