[Reactive-JS](../README.md) / sequence

# Module: sequence

## Index

### Type aliases

* [Sequence](sequence.md#sequence)
* [SequenceOperator](sequence.md#sequenceoperator)
* [SequenceResult](sequence.md#sequenceresult)

### Functions

* [concat](sequence.md#concat)
* [concatAll](sequence.md#concatall)
* [concatMap](sequence.md#concatmap)
* [concatWith](sequence.md#concatwith)
* [distinctUntilChanged](sequence.md#distinctuntilchanged)
* [done](sequence.md#done)
* [empty](sequence.md#empty)
* [endWith](sequence.md#endwith)
* [fromArray](sequence.md#fromarray)
* [fromValue](sequence.md#fromvalue)
* [generate](sequence.md#generate)
* [isDone](sequence.md#isdone)
* [isNotify](sequence.md#isnotify)
* [keep](sequence.md#keep)
* [map](sequence.md#map)
* [mapTo](sequence.md#mapto)
* [notify](sequence.md#notify)
* [repeat](sequence.md#repeat)
* [scan](sequence.md#scan)
* [seek](sequence.md#seek)
* [skipFirst](sequence.md#skipfirst)
* [startWith](sequence.md#startwith)
* [takeFirst](sequence.md#takefirst)
* [takeLast](sequence.md#takelast)
* [takeWhile](sequence.md#takewhile)
* [toRunnable](sequence.md#torunnable)

## Type aliases

### Sequence

Ƭ **Sequence**<T\>: [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

___

### SequenceOperator

Ƭ **SequenceOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*Sequence*](sequence.md#sequence)<TA\>, [*Sequence*](sequence.md#sequence)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

___

### SequenceResult

Ƭ **SequenceResult**<T\>: { `data`: T ; `next`: [*Sequence*](sequence.md#sequence)<T\> ; `type`: SequenceType.Notify  } \| { `type`: SequenceType.Done  }

#### Type parameters:

Name |
------ |
`T` |

## Functions

### concat

▸ **concat**<T\>(`fst`: [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, `snd`: [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, ...`tail`: readonly [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>[]): [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fst` | [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\> |
`snd` | [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\> |
`...tail` | readonly [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>[] |

**Returns:** [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

___

### concatAll

▸ `Const`**concatAll**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### concatMap

▸ `Const`**concatMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

___

### concatWith

▸ `Const`**concatWith**<T\>(`snd`: [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### distinctUntilChanged

▸ `Const`**distinctUntilChanged**<T\>(`options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### done

▸ `Const`**done**<T\>(): [*SequenceResult*](sequence.md#sequenceresult)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*SequenceResult*](sequence.md#sequenceresult)<T\>

___

### empty

▸ `Const`**empty**<T\>(): [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

___

### endWith

▸ **endWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### fromValue

▸ `Const`**fromValue**<T\>(): [*Function1*](functions.md#function1)<T, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<T, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### generate

▸ `Const`**generate**<T\>(`generator`: [*Updater*](functions.md#updater)<T\>, `initialValue`: [*Factory*](functions.md#factory)<T\>): [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`generator` | [*Updater*](functions.md#updater)<T\> |
`initialValue` | [*Factory*](functions.md#factory)<T\> |

**Returns:** [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>

___

### isDone

▸ `Const`**isDone**<T\>(`result`: [*SequenceResult*](sequence.md#sequenceresult)<T\>): result is object

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`result` | [*SequenceResult*](sequence.md#sequenceresult)<T\> |

**Returns:** result is object

___

### isNotify

▸ `Const`**isNotify**<T\>(`result`: [*SequenceResult*](sequence.md#sequenceresult)<T\>): result is object

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`result` | [*SequenceResult*](sequence.md#sequenceresult)<T\> |

**Returns:** result is object

___

### keep

▸ `Const`**keep**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

___

### mapTo

▸ `Const`**mapTo**<TA, TB\>(`v`: TB): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TA\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TB\>\>\>

___

### notify

▸ `Const`**notify**<T\>(`data`: T, `next`: [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>): [*SequenceResult*](sequence.md#sequenceresult)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`data` | T |
`next` | [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\> |

**Returns:** [*SequenceResult*](sequence.md#sequenceresult)<T\>

___

### repeat

▸ **repeat**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<*number*\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<*number*\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

▸ **repeat**<T\>(`count`: *number*): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`count` | *number* |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

▸ **repeat**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### scan

▸ `Const`**scan**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TAcc\>\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<TAcc\>\>\>

___

### seek

▸ `Const`**seek**<T\>(`count`: *number*): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`count` | *number* |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### skipFirst

▸ `Const`**skipFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### startWith

▸ **startWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### takeFirst

▸ `Const`**takeFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### takeLast

▸ `Const`**takeLast**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### takeWhile

▸ `Const`**takeWhile**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>, `options?`: { `inclusive?`: *undefined* \| *boolean*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |
`options?` | { `inclusive?`: *undefined* \| *boolean*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>\>

___

### toRunnable

▸ `Const`**toRunnable**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<[*SequenceResult*](sequence.md#sequenceresult)<T\>\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>
