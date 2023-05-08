[Reactive-JS](../README.md) / [core](core.md) / Containers

# Namespace: Containers

[core](core.md).Containers

## Table of contents

### Interfaces

- [TypeClass](../interfaces/core.Containers.TypeClass.md)

### Type Aliases

- [Of](core.Containers.md#of)
- [Operator](core.Containers.md#operator)

## Type Aliases

### Of

Ƭ **Of**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof [`Container_type`](core.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container.md) |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.Containers.md#of)<`C`, `TA`\>, [`Of`](core.Containers.md#of)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container.md) |
| `TA` | `TA` |
| `TB` | `TB` |
