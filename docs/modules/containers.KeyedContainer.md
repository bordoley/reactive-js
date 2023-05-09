[Reactive-JS](../README.md) / [containers](containers.md) / KeyedContainer

# Namespace: KeyedContainer

[containers](containers.md).KeyedContainer

## Table of contents

### Interfaces

- [Type](../interfaces/containers.KeyedContainer.Type.md)

### Type Aliases

- [KeyOf](containers.KeyedContainer.md#keyof)
- [Of](containers.KeyedContainer.md#of)
- [Operator](containers.KeyedContainer.md#operator)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof [`KeyedContainer_TKey`](containers.md#keyedcontainer_tkey)]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../interfaces/containers.KeyedContainer.Type.md) |

___

### Of

Ƭ **Of**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof [`Container_type`](containers.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../interfaces/containers.Container.Type.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](containers.KeyedContainer.md#of)<`C`, `TKey`, `TA`\>, [`Of`](containers.KeyedContainer.md#of)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../interfaces/containers.KeyedContainer.Type.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |
