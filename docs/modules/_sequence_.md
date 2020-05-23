[undefined - vundefined](../README.md) › ["sequence"](_sequence_.md)

# Module: "sequence"

## Index

### Enumerations

* [SequenceType](../enums/_sequence_.sequencetype.md)

### Type aliases

* [Sequence](_sequence_.md#sequence)
* [SequenceOperator](_sequence_.md#sequenceoperator)
* [SequenceResult](_sequence_.md#sequenceresult)

### Functions

* [concat](_sequence_.md#concat)
* [concatAll](_sequence_.md#const-concatall)
* [concatMap](_sequence_.md#const-concatmap)
* [concatWith](_sequence_.md#const-concatwith)
* [distinctUntilChanged](_sequence_.md#const-distinctuntilchanged)
* [done](_sequence_.md#const-done)
* [empty](_sequence_.md#const-empty)
* [endWith](_sequence_.md#endwith)
* [fromArray](_sequence_.md#const-fromarray)
* [fromValue](_sequence_.md#const-fromvalue)
* [generate](_sequence_.md#const-generate)
* [isDone](_sequence_.md#const-isdone)
* [isNotify](_sequence_.md#const-isnotify)
* [keep](_sequence_.md#const-keep)
* [map](_sequence_.md#const-map)
* [mapTo](_sequence_.md#const-mapto)
* [notify](_sequence_.md#const-notify)
* [repeat](_sequence_.md#repeat)
* [scan](_sequence_.md#const-scan)
* [seek](_sequence_.md#const-seek)
* [skipFirst](_sequence_.md#const-skipfirst)
* [startWith](_sequence_.md#startwith)
* [takeFirst](_sequence_.md#const-takefirst)
* [takeLast](_sequence_.md#const-takelast)
* [takeWhile](_sequence_.md#const-takewhile)
* [toRunnable](_sequence_.md#const-torunnable)

## Type aliases

###  Sequence

Ƭ **Sequence**: *[Factory](_functions_.md#factory)‹[SequenceResult](_sequence_.md#sequenceresult)‹T››*

___

###  SequenceOperator

Ƭ **SequenceOperator**: *[Function1](_functions_.md#function1)‹[Sequence](_sequence_.md#sequence)‹TA›, [Sequence](_sequence_.md#sequence)‹TB››*

___

###  SequenceResult

Ƭ **SequenceResult**: *object | object*

## Functions

###  concat

▸ **concat**<**T**>(`fst`: [Sequence](_sequence_.md#sequence)‹T›, `snd`: [Sequence](_sequence_.md#sequence)‹T›, ...`tail`: keyof Sequence<T>[]): *[Sequence](_sequence_.md#sequence)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [Sequence](_sequence_.md#sequence)‹T› |
`snd` | [Sequence](_sequence_.md#sequence)‹T› |
`...tail` | keyof Sequence<T>[] |

**Returns:** *[Sequence](_sequence_.md#sequence)‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(): *[SequenceOperator](_sequence_.md#sequenceoperator)‹[Sequence](_sequence_.md#sequence)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹[Sequence](_sequence_.md#sequence)‹T›, T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [Sequence](_sequence_.md#sequence)‹TB››): *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [Sequence](_sequence_.md#sequence)‹TB›› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [Sequence](_sequence_.md#sequence)‹T›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [Sequence](_sequence_.md#sequence)‹T› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` done

▸ **done**<**T**>(): *[SequenceResult](_sequence_.md#sequenceresult)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[SequenceResult](_sequence_.md#sequenceresult)‹T›*

___

### `Const` empty

▸ **empty**<**T**>(): *[Sequence](_sequence_.md#sequence)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[Sequence](_sequence_.md#sequence)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`__namedParameters`: object): *[Function1](_functions_.md#function1)‹keyof T[], [Sequence](_sequence_.md#sequence)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {
    startIndex: 0,
  }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [Sequence](_sequence_.md#sequence)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [Sequence](_sequence_.md#sequence)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [Sequence](_sequence_.md#sequence)‹T››*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Updater](_functions_.md#updater)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[Sequence](_sequence_.md#sequence)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`generator` | [Updater](_functions_.md#updater)‹T› |
`initialValue` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[Sequence](_sequence_.md#sequence)‹T›*

___

### `Const` isDone

▸ **isDone**<**T**>(`result`: [SequenceResult](_sequence_.md#sequenceresult)‹T›): *result is object*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [SequenceResult](_sequence_.md#sequenceresult)‹T› |

**Returns:** *result is object*

___

### `Const` isNotify

▸ **isNotify**<**T**>(`result`: [SequenceResult](_sequence_.md#sequenceresult)‹T›): *result is object*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [SequenceResult](_sequence_.md#sequenceresult)‹T› |

**Returns:** *result is object*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹TA, TB›*

___

### `Const` notify

▸ **notify**<**T**>(`data`: T, `next`: [Sequence](_sequence_.md#sequence)‹T›): *[SequenceResult](_sequence_.md#sequenceresult)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |
`next` | [Sequence](_sequence_.md#sequence)‹T› |

**Returns:** *[SequenceResult](_sequence_.md#sequenceresult)‹T›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

▸ **repeat**<**T**>(): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, TAcc›*

___

### `Const` seek

▸ **seek**<**T**>(`count`: number): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[SequenceOperator](_sequence_.md#sequenceoperator)‹T, T›*

___

### `Const` toRunnable

▸ **toRunnable**<**T**>(): *[Function1](_functions_.md#function1)‹[Sequence](_sequence_.md#sequence)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[Sequence](_sequence_.md#sequence)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*
