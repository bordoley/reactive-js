[@reactive-js/core - v0.0.38](../README.md) › ["node"](_node_.md)

# Module: "node"

## Index

### Functions

* [bindNodeCallback](_node_.md#bindnodecallback)
* [brotliCompress](_node_.md#const-brotlicompress)
* [brotliDecompress](_node_.md#const-brotlidecompress)
* [createDisposableNodeStream](_node_.md#const-createdisposablenodestream)
* [createReadableIOSource](_node_.md#const-createreadableiosource)
* [createWritableIOSink](_node_.md#const-createwritableiosink)
* [deflate](_node_.md#const-deflate)
* [gunzip](_node_.md#const-gunzip)
* [gzip](_node_.md#const-gzip)
* [inflate](_node_.md#const-inflate)
* [readFileIOSource](_node_.md#const-readfileiosource)
* [transform](_node_.md#const-transform)

## Functions

###  bindNodeCallback

▸ **bindNodeCallback**<**T**>(`callbackFunc`: [SideEffect1](_functions_.md#sideeffect1)‹[SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect1](_functions_.md#sideeffect1)‹[SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**(`callbackFunc`: [SideEffect1](_functions_.md#sideeffect1)‹[SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect1](_functions_.md#sideeffect1)‹[SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **T**>(`callbackFunc`: [SideEffect2](_functions_.md#sideeffect2)‹A1, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect2](_functions_.md#sideeffect2)‹A1, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**>(`callbackFunc`: [SideEffect2](_functions_.md#sideeffect2)‹A1, [SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect2](_functions_.md#sideeffect2)‹A1, [SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **T**>(`callbackFunc`: [SideEffect3](_functions_.md#sideeffect3)‹A1, A2, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect3](_functions_.md#sideeffect3)‹A1, A2, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**>(`callbackFunc`: [SideEffect3](_functions_.md#sideeffect3)‹A1, A2, [SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect3](_functions_.md#sideeffect3)‹A1, A2, [SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **T**>(`callbackFunc`: [SideEffect4](_functions_.md#sideeffect4)‹A1, A2, A3, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect4](_functions_.md#sideeffect4)‹A1, A2, A3, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**>(`callbackFunc`: [SideEffect4](_functions_.md#sideeffect4)‹A1, A2, A3, [SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect4](_functions_.md#sideeffect4)‹A1, A2, A3, [SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **T**>(`callbackFunc`: [SideEffect5](_functions_.md#sideeffect5)‹A1, A2, A3, A4, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect5](_functions_.md#sideeffect5)‹A1, A2, A3, A4, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**>(`callbackFunc`: [SideEffect5](_functions_.md#sideeffect5)‹A1, A2, A3, A4, [SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect5](_functions_.md#sideeffect5)‹A1, A2, A3, A4, [SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **T**>(`callbackFunc`: [SideEffect6](_functions_.md#sideeffect6)‹A1, A2, A3, A4, A5, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T››): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect6](_functions_.md#sideeffect6)‹A1, A2, A3, A4, A5, [SideEffect2](_functions_.md#sideeffect2)‹unknown, T›› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**>(`callbackFunc`: [SideEffect6](_functions_.md#sideeffect6)‹A1, A2, A3, A4, A5, [SideEffect1](_functions_.md#sideeffect1)‹unknown››): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [SideEffect6](_functions_.md#sideeffect6)‹A1, A2, A3, A4, A5, [SideEffect1](_functions_.md#sideeffect1)‹unknown›› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

___

### `Const` brotliCompress

▸ **brotliCompress**(`options`: BrotliOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` brotliDecompress

▸ **brotliDecompress**(`options`: BrotliOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` createDisposableNodeStream

▸ **createDisposableNodeStream**<**T**>(`stream`: T): *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

**Type parameters:**

▪ **T**: *Readable | Writable | Transform*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | T |

**Returns:** *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

___

### `Const` createReadableIOSource

▸ **createReadableIOSource**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Readable››): *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Readable›› |

**Returns:** *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹Uint8Array›*

___

### `Const` createWritableIOSink

▸ **createWritableIOSink**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Writable››): *[IOSinkLike](../interfaces/_io_.iosinklike.md)‹Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Writable›› |

**Returns:** *[IOSinkLike](../interfaces/_io_.iosinklike.md)‹Uint8Array›*

___

### `Const` deflate

▸ **deflate**(`options`: ZlibOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` gunzip

▸ **gunzip**(`options`: ZlibOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` gzip

▸ **gzip**(`options`: ZlibOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` inflate

▸ **inflate**(`options`: ZlibOptions): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

___

### `Const` readFileIOSource

▸ **readFileIOSource**(`path`: fs.PathLike, `options?`: object): *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹Uint8Array‹››*

**Parameters:**

▪ **path**: *fs.PathLike*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`end?` | number |
`flags?` | string |
`highWaterMark?` | number |
`mode?` | number |
`start?` | number |

**Returns:** *[IOSourceLike](../interfaces/_io_.iosourcelike.md)‹Uint8Array‹››*

___

### `Const` transform

▸ **transform**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform››): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform›› |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*
