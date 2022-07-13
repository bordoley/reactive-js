[Reactive-JS](../README.md) / containers/ContainerLike

# Module: containers/ContainerLike

## Table of contents

### Interfaces

- [ContainerLike](../interfaces/containers_ContainerLike.ContainerLike.md)

### Type Aliases

- [Buffer](containers_ContainerLike.md#buffer)
- [Concat](containers_ContainerLike.md#concat)
- [ConcatAll](containers_ContainerLike.md#concatall)
- [Container](containers_ContainerLike.md#container)
- [ContainerOf](containers_ContainerLike.md#containerof)
- [ContainerOperator](containers_ContainerLike.md#containeroperator)
- [DistinctUntilChanged](containers_ContainerLike.md#distinctuntilchanged)
- [EverySatisfy](containers_ContainerLike.md#everysatisfy)
- [FromArray](containers_ContainerLike.md#fromarray)
- [FromArrayOptions](containers_ContainerLike.md#fromarrayoptions)
- [Generate](containers_ContainerLike.md#generate)
- [Keep](containers_ContainerLike.md#keep)
- [Map](containers_ContainerLike.md#map)
- [Pairwise](containers_ContainerLike.md#pairwise)
- [Reduce](containers_ContainerLike.md#reduce)
- [Repeat](containers_ContainerLike.md#repeat)
- [Scan](containers_ContainerLike.md#scan)
- [SkipFirst](containers_ContainerLike.md#skipfirst)
- [SomeSatisfy](containers_ContainerLike.md#somesatisfy)
- [TakeFirst](containers_ContainerLike.md#takefirst)
- [TakeLast](containers_ContainerLike.md#takelast)
- [TakeWhile](containers_ContainerLike.md#takewhile)
- [ToArray](containers_ContainerLike.md#toarray)
- [ToIterable](containers_ContainerLike.md#toiterable)
- [Zip](containers_ContainerLike.md#zip)

### Functions

- [compute](containers_ContainerLike.md#compute)
- [concatMap](containers_ContainerLike.md#concatmap)
- [concatWith](containers_ContainerLike.md#concatwith)
- [contains](containers_ContainerLike.md#contains)
- [empty](containers_ContainerLike.md#empty)
- [endWith](containers_ContainerLike.md#endwith)
- [fromOption](containers_ContainerLike.md#fromoption)
- [fromValue](containers_ContainerLike.md#fromvalue)
- [ignoreElements](containers_ContainerLike.md#ignoreelements)
- [keepType](containers_ContainerLike.md#keeptype)
- [mapTo](containers_ContainerLike.md#mapto)
- [noneSatisfy](containers_ContainerLike.md#nonesatisfy)
- [startWith](containers_ContainerLike.md#startwith)
- [throws](containers_ContainerLike.md#throws)
- [zipWith](containers_ContainerLike.md#zipwith)

## Type Aliases

### Buffer

Ƭ **Buffer**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `buffer`: <T\>(`options?`: { `maxBufferSize?`: `number`  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, readonly `T`[]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Concat

Ƭ **Concat**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### ConcatAll

Ƭ **ConcatAll**<`C`, `O`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `concatAll`: <T\>(`options?`: `Partial`<`O`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |
| `O` | `Record`<`string`, `never`\> |

___

### Container

Ƭ **Container**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TContainerOf?` | `C` |

___

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `TContainerOf?`: `unknown`  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TContainerOf"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `C` |
| `TA` |
| `TB` |

___

### DistinctUntilChanged

Ƭ **DistinctUntilChanged**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `distinctUntilChanged`: <T\>(`options?`: { `equality?`: [`Equality`](util_functions.md#equality)<`T`\>  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### EverySatisfy

Ƭ **EverySatisfy**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `everySatisfy`: <T\>(`predicate`: [`Predicate`](util_functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### FromArray

Ƭ **FromArray**<`C`, `O`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `fromArray`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](util_functions.md#function1)<readonly `T`[], [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

___

### FromArrayOptions

Ƭ **FromArrayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | [`Option`](util_Option.md#option)<`number`\> |
| `start` | [`Option`](util_Option.md#option)<`number`\> |

___

### Generate

Ƭ **Generate**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `generate`: <T\>(`generator`: [`Updater`](util_functions.md#updater)<`T`\>, `initialValue`: [`Factory`](util_functions.md#factory)<`T`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Keep

Ƭ **Keep**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `keep`: <T\>(`predicate`: [`Predicate`](util_functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Map

Ƭ **Map**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Pairwise

Ƭ **Pairwise**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `pairwise`: <T\>() => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, readonly [[`Option`](util_Option.md#option)<`T`\>, `T`]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Reduce

Ƭ **Reduce**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `reduce`: <T, TAcc\>(`reducer`: [`Reducer`](util_functions.md#reducer)<`T`, `TAcc`\>, `initialValue`: [`Factory`](util_functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Repeat

Ƭ **Repeat**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `repeat`: <T\>(`predicate`: [`Predicate`](util_functions.md#predicate)<`number`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\><T\>(`count`: `number`) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\><T\>() => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Scan

Ƭ **Scan**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `scan`: <T, TAcc\>(`scanner`: [`Reducer`](util_functions.md#reducer)<`T`, `TAcc`\>, `initialValue`: [`Factory`](util_functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### SkipFirst

Ƭ **SkipFirst**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `skipFirst`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### SomeSatisfy

Ƭ **SomeSatisfy**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `someSatisfy`: <T\>(`predicate`: [`Predicate`](util_functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### TakeFirst

Ƭ **TakeFirst**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `takeFirst`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### TakeLast

Ƭ **TakeLast**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `takeLast`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### TakeWhile

Ƭ **TakeWhile**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `takeWhile`: <T\>(`predicate`: [`Predicate`](util_functions.md#predicate)<`T`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### ToArray

Ƭ **ToArray**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `toArray`: <T\>() => [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, readonly `T`[]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### ToIterable

Ƭ **ToIterable**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `toIterable`: <T\>() => [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

___

### Zip

Ƭ **Zip**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `zip`: <TA, TB\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`]\><TA, TB, TC\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\><TA, TB, TC, TD\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\><TA, TB, TC, TD, TE\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TE`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\><TA, TB, TC, TD, TE, TF\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TF`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\><TA, TB, TC, TD, TE, TF, TG\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TG`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\><TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TH`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\><TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TH`\>, `i`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TI`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\><T\>(...`enumerables`: readonly [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, readonly `T`[]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

## Functions

### compute

▸ **compute**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`T`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `Partial`<`O`\>) => [`Function1`](util_functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`T`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

___

### concatMap

▸ **concatMap**<`C`, `TA`, `TB`, `O`\>(`__namedParameters`, `mapper`, `options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |
| `O` | `Record`<`string`, `never`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `Partial`<`O`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `T`\>  } |
| `mapper` | [`Function1`](util_functions.md#function1)<`TA`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\>\> |
| `options?` | `Partial`<`O`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`C`, `T`\>(`__namedParameters`, `snd`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Concat`](containers_ContainerLike.md#concat)<`C`\> |
| `snd` | [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

___

### contains

▸ **contains**<`C`, `T`\>(`__namedParameters`, `value`, `options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SomeSatisfy`](containers_ContainerLike.md#somesatisfy)<`C`\> |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](util_functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>

___

### empty

▸ **empty**<`C`, `T`, `O`\>(`__namedParameters`, `options?`): [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FromArray`](containers_ContainerLike.md#fromarray)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>

___

### endWith

▸ **endWith**<`C`, `T`\>(`m`, `value`, ...`values`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `Partial`<[`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\>) => [`Function1`](util_functions.md#function1)<readonly `T`[], [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>  } |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

___

### fromOption

▸ **fromOption**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](util_functions.md#function1)<[`Option`](util_Option.md#option)<`T`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](containers_ContainerLike.md#fromarray)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`Function1`](util_functions.md#function1)<[`Option`](util_Option.md#option)<`T`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

___

### fromValue

▸ **fromValue**<`C`, `T`, `O`\>(`__namedParameters`, `options?`): [`Function1`](util_functions.md#function1)<`T`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FromArray`](containers_ContainerLike.md#fromarray)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`C`, `T`\>(`__namedParameters`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](containers_ContainerLike.md#keep)<`C`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `unknown`, `T`\>

___

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](containers_ContainerLike.md#keep)<`C`\> |
| `predicate` | [`TypePredicate`](util_functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `TA`, `TB`\>(`__namedParameters`, `value`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Map`](containers_ContainerLike.md#map)<`C`\> |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

___

### noneSatisfy

▸ **noneSatisfy**<`C`, `T`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`EverySatisfy`](containers_ContainerLike.md#everysatisfy)<`C`\> |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`C`, `T`\>(`m`, `value`, ...`values`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `Partial`<[`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\>) => [`Function1`](util_functions.md#function1)<readonly `T`[], [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>  } |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>

___

### throws

▸ **throws**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`unknown`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) = [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `Partial`<`O`\>) => [`Function1`](util_functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`unknown`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>

___

### zipWith

▸ **zipWith**<`C`, `TA`, `TB`\>(`__namedParameters`, `snd`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers_ContainerLike.md#zip)<`C`\> |
| `snd` | [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>
