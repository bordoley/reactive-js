[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DecodeWithCharset

# Interface: DecodeWithCharset<C, O\>

[rx](../modules/rx.md).DecodeWithCharset

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Operator Methods

- [decodeWithCharset](rx.DecodeWithCharset.md#decodewithcharset)

## Operator Methods

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `charset?`: `string`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>
