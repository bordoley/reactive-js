[@reactive-js/core - v0.0.41](../README.md) › ["runnable"](_runnable_.md)

# Module: "runnable"

## Index

### Classes

* [AbstractDelegatingSink](../classes/_runnable_.abstractdelegatingsink.md)

### Interfaces

* [RunnableLike](../interfaces/_runnable_.runnablelike.md)
* [SinkLike](../interfaces/_runnable_.sinklike.md)

### Type aliases

* [RunnableOperator](_runnable_.md#runnableoperator)
* [SinkOperator](_runnable_.md#sinkoperator)

### Variables

* [sinkDone](_runnable_.md#const-sinkdone)

### Functions

* [compute](_runnable_.md#const-compute)
* [concat](_runnable_.md#concat)
* [concatAll](_runnable_.md#const-concatall)
* [concatMap](_runnable_.md#const-concatmap)
* [concatWith](_runnable_.md#const-concatwith)
* [contains](_runnable_.md#const-contains)
* [createRunnable](_runnable_.md#const-createrunnable)
* [distinctUntilChanged](_runnable_.md#const-distinctuntilchanged)
* [empty](_runnable_.md#const-empty)
* [endWith](_runnable_.md#endwith)
* [everySatisfy](_runnable_.md#const-everysatisfy)
* [first](_runnable_.md#const-first)
* [forEach](_runnable_.md#const-foreach)
* [fromArray](_runnable_.md#const-fromarray)
* [fromValue](_runnable_.md#const-fromvalue)
* [generate](_runnable_.md#const-generate)
* [keep](_runnable_.md#const-keep)
* [keepType](_runnable_.md#const-keeptype)
* [last](_runnable_.md#const-last)
* [lift](_runnable_.md#const-lift)
* [map](_runnable_.md#const-map)
* [mapTo](_runnable_.md#const-mapto)
* [noneSatisfy](_runnable_.md#const-nonesatisfy)
* [reduce](_runnable_.md#const-reduce)
* [repeat](_runnable_.md#repeat)
* [scan](_runnable_.md#const-scan)
* [skipFirst](_runnable_.md#const-skipfirst)
* [someSatisfy](_runnable_.md#const-somesatisfy)
* [startWith](_runnable_.md#startwith)
* [takeFirst](_runnable_.md#const-takefirst)
* [takeLast](_runnable_.md#const-takelast)
* [takeWhile](_runnable_.md#const-takewhile)
* [toArray](_runnable_.md#const-toarray)
* [toRunnable](_runnable_.md#const-torunnable)

## Type aliases

###  RunnableOperator

Ƭ **RunnableOperator**: *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TA›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB››*

___

###  SinkOperator

Ƭ **SinkOperator**: *[Function1](_functions_.md#function1)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹TB›, [SinkLike](../interfaces/_runnable_.sinklike.md)‹TA››*

## Variables

### `Const` sinkDone

• **sinkDone**: *symbol* = _sinkDone

## Functions

### `Const` compute

▸ **compute**<**T**>(): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

###  concat

▸ **concat**<**T**>(`fst`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, `snd`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, ...`tail`: keyof RunnableLike<T>[]): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

Creates an `RunnableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |
`snd` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |
`...tail` | keyof RunnableLike<T>[] |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(): *[RunnableOperator](_runnable_.md#runnableoperator)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB››): *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB›› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equality`: [Equality](_functions_.md#equality)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | T | - |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` createRunnable

▸ **createRunnable**<**T**>(`run`: [SideEffect1](_functions_.md#sideeffect1)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹T››): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`run` | [SideEffect1](_functions_.md#sideeffect1)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹T›› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` first

▸ **first**<**T**>(`runnable`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`runnable` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: [SideEffect1](_functions_.md#sideeffect1)‹T›): *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, void›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [SideEffect1](_functions_.md#sideeffect1)‹T› |

**Returns:** *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`options`: object): *[Function1](_functions_.md#function1)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {
    startIndex: 0,
  }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Updater](_functions_.md#updater)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`generator` | [Updater](_functions_.md#updater)‹T› |
`initialValue` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

___

### `Const` last

▸ **last**<**T**>(`runnable`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`runnable` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SinkOperator](_runnable_.md#sinkoperator)‹TA, TB›): *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [SinkOperator](_runnable_.md#sinkoperator)‹TA, TB› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`value`: TB): *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹TA, TB›*

___

### `Const` noneSatisfy

▸ **noneSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

Returns an RunnableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› | The predicate function to apply.  |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

Returns an RunnableLike that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

▸ **repeat**<**T**>(): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

Returns an RunnableLike that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`scanner` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, TAcc›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` someSatisfy

▸ **someSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[RunnableOperator](_runnable_.md#runnableoperator)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(): *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, keyof T[]›*

Accumulates all values emitted by `runnable` into an array.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, keyof T[]›*

___

### `Const` toRunnable

▸ **toRunnable**<**T**>(): *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*
