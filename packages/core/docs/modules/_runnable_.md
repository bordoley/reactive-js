[@reactive-js/core - v0.0.37](../README.md) › ["runnable"](_runnable_.md)

# Module: "runnable"

## Index

### Classes

* [AbstractDelegatingSink](../classes/_runnable_.abstractdelegatingsink.md)

### Interfaces

* [RunnableLike](../interfaces/_runnable_.runnablelike.md)
* [SinkLike](../interfaces/_runnable_.sinklike.md)

### Type aliases

* [RunnableFunction](_runnable_.md#runnablefunction)
* [SinkFunction](_runnable_.md#sinkfunction)

### Functions

* [createRunnable](_runnable_.md#const-createrunnable)
* [fromArray](_runnable_.md#const-fromarray)
* [keep](_runnable_.md#const-keep)
* [keepType](_runnable_.md#const-keeptype)
* [lift](_runnable_.md#const-lift)
* [map](_runnable_.md#const-map)
* [reduce](_runnable_.md#const-reduce)
* [scan](_runnable_.md#const-scan)
* [toArray](_runnable_.md#const-toarray)

## Type aliases

###  RunnableFunction

Ƭ **RunnableFunction**: *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TA›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB››*

___

###  SinkFunction

Ƭ **SinkFunction**: *[Function](_functions_.md#function)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹TB›, [SinkLike](../interfaces/_runnable_.sinklike.md)‹TA››*

## Functions

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

### `Const` fromArray

▸ **fromArray**<**T**>(`options`: object): *[Function](_functions_.md#function)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {
    startIndex: 0,
  }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *[Function](_functions_.md#function)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SinkFunction](_runnable_.md#sinkfunction)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [SinkFunction](_runnable_.md#sinkfunction)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function](_functions_.md#function)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function](_functions_.md#function)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, TAcc›*

Returns an `ObservableLike` that applies an accumulator function over the source,
and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scanner` | [Reducer](_functions_.md#reducer)‹T, TAcc› | The accumulator function called on each source value. |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› | The initial accumulation value.  |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, TAcc›*

___

### `Const` toArray

▸ **toArray**<**T**>(): *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, keyof T[]›*

**Type parameters:**

▪ **T**

**Returns:** *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, keyof T[]›*
