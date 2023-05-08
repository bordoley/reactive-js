[Reactive-JS](../README.md) / [core](core.md) / KeyedContainer

# Namespace: KeyedContainer

[core](core.md).KeyedContainer

## Table of contents

### Interfaces

- [TypeClass](../interfaces/core.KeyedContainer.TypeClass.md)

### Type Aliases

- [KeyOf](core.KeyedContainer.md#keyof)
- [Of](core.KeyedContainer.md#of)
- [Operator](core.KeyedContainer.md#operator)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainer_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/core.KeyedContainer-1.md) |

___

### Of

Ƭ **Of**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.KeyedContainer.md#of)<`C`, `TKey`, `TA`\>, [`Of`](core.KeyedContainer.md#of)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/core.KeyedContainer-1.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |
