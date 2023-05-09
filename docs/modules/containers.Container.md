[Reactive-JS](../README.md) / [containers](containers.md) / Container

# Namespace: Container

[containers](containers.md).Container

## Table of contents

### Interfaces

- [Type](../interfaces/containers.Container.Type.md)

### Type Aliases

- [Of](containers.Container.md#of)
- [Operator](containers.Container.md#operator)

## Type Aliases

### Of

Ƭ **Of**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof [`Container_type`](containers.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../interfaces/containers.Container.Type.md) |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](containers.Container.md#of)<`C`, `TA`\>, [`Of`](containers.Container.md#of)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../interfaces/containers.Container.Type.md) |
| `TA` | `TA` |
| `TB` | `TB` |
