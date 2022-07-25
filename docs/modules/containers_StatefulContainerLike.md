[Reactive-JS](../README.md) / containers/StatefulContainerLike

# Module: containers/StatefulContainerLike

## Table of contents

### Functions

- [encodeUtf8](containers_StatefulContainerLike.md#encodeutf8)
- [genMap](containers_StatefulContainerLike.md#genmap)

## Functions

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](functions.md#factory)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `Partial`<`OConcatAll`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  } & { `fromIterator`: <T_1, TReturn_1, TNext_1\>(`options?`: `Partial`<`OFromIterator`\>) => [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T_1`, `TReturn_1`, `TNext_1`\>\>, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>
