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
* [transform](_node_.md#const-transform)

## Functions

###  bindNodeCallback

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function1](_functions_.md#function1)‹[Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function1](_functions_.md#function1)‹[Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function1](_functions_.md#function1)‹[Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function1](_functions_.md#function1)‹[Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **R2**, **T**>(`callbackFunc`: [Function1](_functions_.md#function1)‹[Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function1](_functions_.md#function1)‹[Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **T**>(`callbackFunc`: [Function1](_functions_.md#function1)‹[Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function1](_functions_.md#function1)‹[Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**(`callbackFunc`: [Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function2](_functions_.md#function2)‹A1, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function2](_functions_.md#function2)‹A1, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function2](_functions_.md#function2)‹A1, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function2](_functions_.md#function2)‹A1, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **T**>(`callbackFunc`: [Function2](_functions_.md#function2)‹A1, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function2](_functions_.md#function2)‹A1, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **R1**, **T**>(`callbackFunc`: [Function2](_functions_.md#function2)‹A1, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function2](_functions_.md#function2)‹A1, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**>(`callbackFunc`: [Function2](_functions_.md#function2)‹A1, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function2](_functions_.md#function2)‹A1, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

**Returns:** *[Function1](_functions_.md#function1)‹A1, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function3](_functions_.md#function3)‹A1, A2, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function3](_functions_.md#function3)‹A1, A2, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function3](_functions_.md#function3)‹A1, A2, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function3](_functions_.md#function3)‹A1, A2, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **T**>(`callbackFunc`: [Function3](_functions_.md#function3)‹A1, A2, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function3](_functions_.md#function3)‹A1, A2, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **T**>(`callbackFunc`: [Function3](_functions_.md#function3)‹A1, A2, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function3](_functions_.md#function3)‹A1, A2, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**>(`callbackFunc`: [Function3](_functions_.md#function3)‹A1, A2, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function3](_functions_.md#function3)‹A1, A2, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

**Returns:** *[Function2](_functions_.md#function2)‹A1, A2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function4](_functions_.md#function4)‹A1, A2, A3, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function4](_functions_.md#function4)‹A1, A2, A3, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function4](_functions_.md#function4)‹A1, A2, A3, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function4](_functions_.md#function4)‹A1, A2, A3, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **T**>(`callbackFunc`: [Function4](_functions_.md#function4)‹A1, A2, A3, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function4](_functions_.md#function4)‹A1, A2, A3, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **T**>(`callbackFunc`: [Function4](_functions_.md#function4)‹A1, A2, A3, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function4](_functions_.md#function4)‹A1, A2, A3, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**>(`callbackFunc`: [Function4](_functions_.md#function4)‹A1, A2, A3, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function4](_functions_.md#function4)‹A1, A2, A3, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

**Returns:** *[Function3](_functions_.md#function3)‹A1, A2, A3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **T**>(`callbackFunc`: [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **T**>(`callbackFunc`: [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**>(`callbackFunc`: [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function5](_functions_.md#function5)‹A1, A2, A3, A4, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

**Returns:** *[Function4](_functions_.md#function4)‹A1, A2, A3, A4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown›, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function5](_functions_.md#function5)‹unknown, R1, R2, R3, R4, unknown›, unknown› |
`selector` | [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown›, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function4](_functions_.md#function4)‹unknown, R1, R2, R3, unknown›, unknown› |
`selector` | [Function3](_functions_.md#function3)‹R1, R2, R3, T› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **T**>(`callbackFunc`: [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown›, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function3](_functions_.md#function3)‹unknown, R1, R2, unknown›, unknown› |
`selector` | [Function2](_functions_.md#function2)‹R1, R2, T› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **T**>(`callbackFunc`: [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown›, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function2](_functions_.md#function2)‹unknown, R1, unknown›, unknown› |
`selector` | [Function1](_functions_.md#function1)‹R1, T› |

**Returns:** *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**>(`callbackFunc`: [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown›): *[Function5](_functions_.md#function5)‹A1, A2, A3, A4, A5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

**Parameters:**

Name | Type |
------ | ------ |
`callbackFunc` | [Function6](_functions_.md#function6)‹A1, A2, A3, A4, A5, [Function1](_functions_.md#function1)‹unknown, unknown›, unknown› |

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

### `Const` transform

▸ **transform**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform››): *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform›› |

**Returns:** *[IOSourceOperator](_io_.md#iosourceoperator)‹Uint8Array, Uint8Array›*
