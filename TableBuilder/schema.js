[
	{
		"Name" : "PURCHASE_ORDER",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["ORDER_NUMBER"],
		"Fields" : [
			{
				"Name" : "ORDER_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "VENDOR_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "ITEM_NUMBER_VERSION",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "ITEM_QTY",
				"Type" :
				{
					"Name" : "Int"
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "ITEM_QTY_PRINTED",
				"Type" :
				{
					"Name" : "Int"
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "IMPORT_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "ORDER_SORCE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "DESTINATION_ORDER",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["ORDER_NUMBER"],
		"Fields" : [
			{
				"Name" : "ORDER_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "COPIES",
				"Type" :
				{
					"Name" : "Int",
					"Size" : 13
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "SHIP_TO_COUNTRY",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "LOT_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "EXPIRY_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "PRINTER_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "FORMAT_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "PRINT_ATTEMPT_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "ERROR_MSG",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "PRINT_STATUS",
				"Type" :
				{
					"Name" : "Int"
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "WORK_ORDER",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["ORDER_NUMBER"],
		"Fields" : [
			{
				"Name" : "ORDER_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "ITEM_NUMBER_VERSION",
				"Type" :
				{
					"Name" : "int"
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "ORDER_QUANTITY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "ORDER_QUANTITY_PRINTED",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "LOT_NUMBER",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "IMPORT_DATE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "ORDER_SOURCE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "DOM",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "EXPIRY_DATE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				}
			},
			{
				"Name" : "COO",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "COO_VERSION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "WORK_ORDER_CHINA",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["ORDER_NUMBER"],
		"Fields" : [
			{
				"Name" : "ORDER_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "ITEM_NUMBER_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "ORDER_QUANTITY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "ORDER_QUANTITY_PRINTED",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "LOT_NUMBER",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "IMPORT_DATE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "ORDER_SOURCE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "DOM",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "EXPIRY_DATE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				}
			},
			{
				"Name" : "COO",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "COO_VERSION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "REASON",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["REASON_ID"],
		"Fields" : [
			{
				"Name" : "REASON_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 10
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "REASON_TEXT",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "CATEGORY",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "SUPPLIER",
		"Schema" : "Table",
		"Properties" : [],
		"PrimaryKey" : ["SUPPLIER_ID"],
		"Fields" : [
			{
				"Name" : "SUPPLIER_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "LIC",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "COUNTRY_OF_ORIGIN",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "IMAGE",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["IMAGE_ID"],
		"Fields" : [
			{
				"Name" : "IMAGE_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "DESCRIPTION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "IMAGE_PATH",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "CATEGORY",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "COUNTRY",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["COUNTRY_ID"],
		"Fields" : [
			{
				"Name" : "COUNTRY_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "STATEMENT",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["STATEMENT_ID"],
		"Fields" : [
			{
				"Name" : "STATEMENT_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "DESCRIPTION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "CATEGORY",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "TRANSLATION",
		"Schema" : "DataEditor",
		"Properties" : [],
		"PrimaryKey" : ["TRANSLATION_ID"],
		"Fields" : [
			{
				"Name" : "TRANSLATION_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "DESCRIPTION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "CATEGORY",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [],
		"CheckConstraints" : []
	},
	{
		"Name" : "TRANSLATION_CHILD",
		"Schema" : "DataEditorChild",
		"Properties" : ["DataEditor-OneToMany=TRUE"],
		"Parent" : "TRANSLATION",
		"PrimaryKey" : ["TRANSLATION_ID"],
		"Fields" : [
			{
				"Name" : "TRANSLATION_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "COUNTRY_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "VALUE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				},
				"AllowNulls" : "False"
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [
			{
				"ReferencedTable" : "TRANSLATION",
				"ReferencedFields" : ["TRANSLATION_ID"],
				"Fields" : ["TRANSLATION_ID"]
			},
			{
				"ReferencedTable" : "COUNTRY",
				"ReferencedFields" : ["COUNTRY_ID"],
				"Fields" : ["COUNTRY_ID"]
			}
		],
		"CheckConstraints" : []
	},
	{
		"Name" : "ASD",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["ITEM_NUMBER"],
		"Fields" : [
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "LABEL_SPEC_ID",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "EXTRA_LABELS",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "BASE_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "SALES_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "BATCH",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "EXP_DATE",
				"Type" :
				{
					"Name" : "datetime"
				}
			},
			{
				"Name" : "FILTER_FIELD",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "OT1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "OT1_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "OT1_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "OT2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "OT2_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "OT2_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IN1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "IN1_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IN1_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IN2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "IN2_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IN2_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CS1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "CS1_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CS1_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CS2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "CS2_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CS2_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "MS1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "MS1_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "MS1_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "MS2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "MS2_QTY",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "MS2_PKG_LVL",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SAP_PLANT_NAME",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN1_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN2_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN3_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TRADE_NAME_160",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES1_30",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES2_40",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES3_50",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DES6",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM1_10",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM2_20",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM6",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT220",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT230",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT240",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT250",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT260",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT270",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT280",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT290",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT300",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT310",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT330",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT340",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT350",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT360",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT370",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT380",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT390",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT400",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT410",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT420",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT430",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT440",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "IS_SERIALIZED",
				"Type" :
				{
					"Name" : "string",
					"Size" : 1
				}
			},
			{
				"Name" : "PATENT_NUM1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "PATENT_NUM2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "HUMIDITY_LMT_UPPER",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "HUMIDITY_LMT_LOWER",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEMP_LMT_LOWER",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "TEMP_LMT_UPPER",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "CE_APPROVED",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "SHELF_LIFE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "SHELF_LIFE_UOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 50
				}
			},
			{
				"Name" : "MFG_CODE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 10
				}
			},
			{
				"Name" : "COO",
				"Type" :
				{
					"Name" : "string",
					"Size" : 3
				}
			},
			{
				"Name" : "COO_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PATENT_STMT",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PATENT_STMT_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PHRASE1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PHRASE1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PHRASE2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PHRASE2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PHRASE3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PHRASE3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PHRASE4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PHRASE4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "PHRASE5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "PHRASE5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "COLOR1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "COLOR1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "COLOR2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "COLOR2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "COLOR3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "COLOR3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE1_170",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE1_170_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE6",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE6_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_CE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_CE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_DARK_STORAGE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_DARK_STORAGE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_DOM",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_DOM_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_IFU",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_IFU_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_KEEP_DRY",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_KEEP_DRY_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_LATEX_FREE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_LATEX_FREE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_RX",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_RX_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT1",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT2",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT3",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT4",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT5",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LATEX_FREE_STMT",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "LATEX_FREE_STMT_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SAMP_TRIAL_STMT_190",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SAMP_TRIAL_STMT_190_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SERIAL_PREFIX",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SERIAL_PREFIX_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SIDE_STMT_180",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SIDE_STMT_180_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SIZE_STMT_200",
				"Type" :
				{
					"Name" : "string",
					"Size" : 30
				}
			},
			{
				"Name" : "SIZE_STMT_200_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [
			{
				"ReferencedTable" : "COUNTRY_HISTORY",
				"ReferencedFields" : ["COUNTRY_ID", "MAPSEC_Version"],
				"Fields" : ["COO", "COO_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS1", "CO_ADDRESS1_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS2", "CO_ADDRESS2_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS3", "CO_ADDRESS3_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PATENT_STMT", "PATENT_STMT_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PHRASE1", "PHRASE1_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PHRASE2", "PHRASE2_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PHRASE3", "PHRASE3_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PHRASE4", "PHRASE4_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["PHRASE5", "PHRASE5_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["COLOR1", "COLOR1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["COLOR2", "COLOR2_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["COLOR3", "COLOR3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE1_170", "IMAGE1_170_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE2", "IMAGE2_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE3", "IMAGE3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE4", "IMAGE4_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE5", "IMAGE5_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE6", "IMAGE6_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_CE", "SYMBOL_CE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_DARK_STORAGE", "SYMBOL_DARK_STORAGE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_DOM", "SYMBOL_DOM_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_IFU", "SYMBOL_IFU_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_KEEP_DRY", "SYMBOL_KEEP_DRY_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_LATEX_FREE", "SYMBOL_LATEX_FREE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_RX", "SYMBOL_RX_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_SINGLE_USE", "SYMBOL_SINGLE_USE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_STERILE_MTHD", "SYMBOL_STERILE_MTHD_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF1", "SYMBOL_USER_DEF1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF2", "SYMBOL_USER_DEF2_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF3", "SYMBOL_USER_DEF3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF4", "SYMBOL_USER_DEF4_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF5", "SYMBOL_USER_DEF5_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT1", "LANG_STMT1_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT2", "LANG_STMT2_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT3", "LANG_STMT3_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT4", "LANG_STMT4_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT5", "LANG_STMT5_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LATEX_FREE_STMT", "LATEX_FREE_STMT_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["SAMP_TRIAL_STMT_190", "SAMP_TRIAL_STMT_190_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["SERIAL_PREFIX", "SERIAL_PREFIX_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["SIDE_STMT_180", "SIDE_STMT_180_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["SIZE_STMT_200", "SIZE_STMT_200_VERSION"]
			}
		],
		"CheckConstraints" : [
			{
				"CheckCondition" : "(COO IS NULL AND COO_VERSION IS NULL) OR (COO IS NOT NULL AND COO_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS1 IS NULL AND CO_ADDRESS1_VERSION IS NULL) OR (CO_ADDRESS1 IS NOT NULL AND CO_ADDRESS1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS2 IS NULL AND CO_ADDRESS2_VERSION IS NULL) OR (CO_ADDRESS2 IS NOT NULL AND CO_ADDRESS2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS3 IS NULL AND CO_ADDRESS3_VERSION IS NULL) OR (CO_ADDRESS3 IS NOT NULL AND CO_ADDRESS3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PATENT_STMT IS NULL AND PATENT_STMT_VERSION IS NULL) OR (PATENT_STMT IS NOT NULL AND PATENT_STMT_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PHRASE1 IS NULL AND PHRASE1_VERSION IS NULL) OR (PHRASE1 IS NOT NULL AND PHRASE1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PHRASE2 IS NULL AND PHRASE2_VERSION IS NULL) OR (PHRASE2 IS NOT NULL AND PHRASE2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PHRASE3 IS NULL AND PHRASE3_VERSION IS NULL) OR (PHRASE3 IS NOT NULL AND PHRASE3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PHRASE4 IS NULL AND PHRASE4_VERSION IS NULL) OR (PHRASE4 IS NOT NULL AND PHRASE4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(PHRASE5 IS NULL AND PHRASE5_VERSION IS NULL) OR (PHRASE5 IS NOT NULL AND PHRASE5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(COLOR1 IS NULL AND COLOR1_VERSION IS NULL) OR (COLOR1 IS NOT NULL AND COLOR1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(COLOR2 IS NULL AND COLOR2_VERSION IS NULL) OR (COLOR2 IS NOT NULL AND COLOR2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(COLOR3 IS NULL AND COLOR3_VERSION IS NULL) OR (COLOR3 IS NOT NULL AND COLOR3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE1_170 IS NULL AND IMAGE1_170_VERSION IS NULL) OR (IMAGE1_170 IS NOT NULL AND IMAGE1_170_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE2 IS NULL AND IMAGE2_VERSION IS NULL) OR (IMAGE2 IS NOT NULL AND IMAGE2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE3 IS NULL AND IMAGE3_VERSION IS NULL) OR (IMAGE3 IS NOT NULL AND IMAGE3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE4 IS NULL AND IMAGE4_VERSION IS NULL) OR (IMAGE4 IS NOT NULL AND IMAGE4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE5 IS NULL AND IMAGE5_VERSION IS NULL) OR (IMAGE5 IS NOT NULL AND IMAGE5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE6 IS NULL AND IMAGE6_VERSION IS NULL) OR (IMAGE6 IS NOT NULL AND IMAGE6_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_CE IS NULL AND SYMBOL_CE_VERSION IS NULL) OR (SYMBOL_CE IS NOT NULL AND SYMBOL_CE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_DARK_STORAGE IS NULL AND SYMBOL_DARK_STORAGE_VERSION IS NULL) OR (SYMBOL_DARK_STORAGE IS NOT NULL AND SYMBOL_DARK_STORAGE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_DOM IS NULL AND SYMBOL_DOM_VERSION IS NULL) OR (SYMBOL_DOM IS NOT NULL AND SYMBOL_DOM_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_IFU IS NULL AND SYMBOL_IFU_VERSION IS NULL) OR (SYMBOL_IFU IS NOT NULL AND SYMBOL_IFU_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_KEEP_DRY IS NULL AND SYMBOL_KEEP_DRY_VERSION IS NULL) OR (SYMBOL_KEEP_DRY IS NOT NULL AND SYMBOL_KEEP_DRY_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_LATEX_FREE IS NULL AND SYMBOL_LATEX_FREE_VERSION IS NULL) OR (SYMBOL_LATEX_FREE IS NOT NULL AND SYMBOL_LATEX_FREE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_RX IS NULL AND SYMBOL_RX_VERSION IS NULL) OR (SYMBOL_RX IS NOT NULL AND SYMBOL_RX_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_SINGLE_USE IS NULL AND SYMBOL_SINGLE_USE_VERSION IS NULL) OR (SYMBOL_SINGLE_USE IS NOT NULL AND SYMBOL_SINGLE_USE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_STERILE_MTHD IS NULL AND SYMBOL_STERILE_MTHD_VERSION IS NULL) OR (SYMBOL_STERILE_MTHD IS NOT NULL AND SYMBOL_STERILE_MTHD_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF1 IS NULL AND SYMBOL_USER_DEF1_VERSION IS NULL) OR (SYMBOL_USER_DEF1 IS NOT NULL AND SYMBOL_USER_DEF1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF2 IS NULL AND SYMBOL_USER_DEF2_VERSION IS NULL) OR (SYMBOL_USER_DEF2 IS NOT NULL AND SYMBOL_USER_DEF2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF3 IS NULL AND SYMBOL_USER_DEF3_VERSION IS NULL) OR (SYMBOL_USER_DEF3 IS NOT NULL AND SYMBOL_USER_DEF3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF4 IS NULL AND SYMBOL_USER_DEF4_VERSION IS NULL) OR (SYMBOL_USER_DEF4 IS NOT NULL AND SYMBOL_USER_DEF4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF5 IS NULL AND SYMBOL_USER_DEF5_VERSION IS NULL) OR (SYMBOL_USER_DEF5 IS NOT NULL AND SYMBOL_USER_DEF5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT1 IS NULL AND LANG_STMT1_VERSION IS NULL) OR (LANG_STMT1 IS NOT NULL AND LANG_STMT1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT2 IS NULL AND LANG_STMT2_VERSION IS NULL) OR (LANG_STMT2 IS NOT NULL AND LANG_STMT2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT3 IS NULL AND LANG_STMT3_VERSION IS NULL) OR (LANG_STMT3 IS NOT NULL AND LANG_STMT3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT4 IS NULL AND LANG_STMT4_VERSION IS NULL) OR (LANG_STMT4 IS NOT NULL AND LANG_STMT4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT5 IS NULL AND LANG_STMT5_VERSION IS NULL) OR (LANG_STMT5 IS NOT NULL AND LANG_STMT5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LATEX_FREE_STMT IS NULL AND LATEX_FREE_STMT_VERSION IS NULL) OR (LATEX_FREE_STMT IS NOT NULL AND LATEX_FREE_STMT_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SAMP_TRIAL_STMT_190 IS NULL AND SAMP_TRIAL_STMT_190_VERSION IS NULL) OR (SAMP_TRIAL_STMT_190 IS NOT NULL AND SAMP_TRIAL_STMT_190_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SERIAL_PREFIX IS NULL AND SERIAL_PREFIX_VERSION IS NULL) OR (SERIAL_PREFIX IS NOT NULL AND SERIAL_PREFIX_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SIDE_STMT_180 IS NULL AND SIDE_STMT_180_VERSION IS NULL) OR (SIDE_STMT_180 IS NOT NULL AND SIDE_STMT_180_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SIZE_STMT_200 IS NULL AND SIZE_STMT_200_VERSION IS NULL) OR (SIZE_STMT_200 IS NOT NULL AND SIZE_STMT_200_VERSION IS NOT NULL)"
			}
		]
	},
	{
		"Name" : "EXPRESS_IMPLANT",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["EITEM_NUMBER_VCASENUMBER"],
		"Fields" : [
			{
				"Name" : "EITEM_NUMBER_VCASENUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "PRINT_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "EXP_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "COO",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				}
			},
			{
				"Name" : "COO_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_IFU",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_IFU_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_CE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_CE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SHELF_LIFE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SHELF_LIFE_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CO_ADDRESS1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "DES1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "PATIENT_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "MATERIAL",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "VITEM_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "TEXT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "TEXT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 255
				}
			},
			{
				"Name" : "SYMBOL_RX",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_RX_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "FORMAT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "FORMAT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [
			{
				"ReferencedTable" : "COUNTRY_HISTORY",
				"ReferencedFields" : ["COUNTRY_ID", "MAPSEC_Version"],
				"Fields" : ["COO", "COO_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_SINGLE_USE", "SYMBOL_SINGLE_USE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_IFU", "SYMBOL_IFU_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_CE", "SYMBOL_CE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_STERILE_MTHD", "SYMBOL_STERILE_MTHD_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS1", "CO_ADDRESS1_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS2", "CO_ADDRESS2_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS3", "CO_ADDRESS3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_RX", "SYMBOL_RX_VERSION"]
			}
		],
		"CheckConstraints" : [
			{
				"CheckCondition" : "(COO IS NULL AND COO_VERSION IS NULL) OR (COO IS NOT NULL AND COO_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_SINGLE_USE IS NULL AND SYMBOL_SINGLE_USE_VERSION IS NULL) OR (SYMBOL_SINGLE_USE IS NOT NULL AND SYMBOL_SINGLE_USE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_IFU IS NULL AND SYMBOL_IFU_VERSION IS NULL) OR (SYMBOL_IFU IS NOT NULL AND SYMBOL_IFU_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_CE IS NULL AND SYMBOL_CE_VERSION IS NULL) OR (SYMBOL_CE IS NOT NULL AND SYMBOL_CE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_STERILE_MTHD IS NULL AND SYMBOL_STERILE_MTHD_VERSION IS NULL) OR (SYMBOL_STERILE_MTHD IS NOT NULL AND SYMBOL_STERILE_MTHD_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS1 IS NULL AND CO_ADDRESS1_VERSION IS NULL) OR (CO_ADDRESS1 IS NOT NULL AND CO_ADDRESS1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS2 IS NULL AND CO_ADDRESS2_VERSION IS NULL) OR (CO_ADDRESS2 IS NOT NULL AND CO_ADDRESS2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS3 IS NULL AND CO_ADDRESS3_VERSION IS NULL) OR (CO_ADDRESS3 IS NOT NULL AND CO_ADDRESS3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_RX IS NULL AND SYMBOL_RX_VERSION IS NULL) OR (SYMBOL_RX IS NOT NULL AND SYMBOL_RX_VERSION IS NOT NULL)"
			}
		]
	},
	{
		"Name" : "CHINA",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["ITEM_NUMBER"],
		"Fields" : [
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "LABEL_SPEC_ID",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "FILTER_FIELD",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "EXTRA_LABELS",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "OT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "OT1_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "OT1_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "OT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "OT2_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "OT2_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "IN1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "IN1_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "IN1_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "IN2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "IN2_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "IN2_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "CS1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CS1_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "CS1_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "CS2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CS2_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "CS2_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "MS1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "MS1_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "MS1_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "MS2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "MS2_QTY",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "MS2_PKG_LVL",
				"Type" :
				{
					"Name" : "Int"
				}
			},
			{
				"Name" : "BATCH",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "EXP_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "REFERENCE_DESCRIPTION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "STANDARD_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CERTIFICATE_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "ARTICLE_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "BASE_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SALES_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SAP_PLANT",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "COMPANY_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "COO",
				"Type" :
				{
					"Name" : "String",
					"Size" : 3
				}
			},
			{
				"Name" : "COO_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "GTIN1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN1_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN2_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN3_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "HIBC_CNTRL_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TRADE_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "MATERIAL",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES6",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DES7",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIM6",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "is serialized",
				"Type" :
				{
					"Name" : "String",
					"Size" : 1
				}
			},
			{
				"Name" : "CE_APPROVED",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SYMBOL_CE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_CE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_STERILE_MTHD_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SHELF_LIFE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SHELF_LIFE_UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SYMBOL_IFU",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_IFU_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_SINGLE_USE_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_USER_DEF5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IMAGE2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "CO_ADDRESS3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CO_ADDRESS3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "LANG_STMT5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "LANG_STMT5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [
			{
				"ReferencedTable" : "COUNTRY_HISTORY",
				"ReferencedFields" : ["COUNTRY_ID", "MAPSEC_Version"],
				"Fields" : ["COO", "COO_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_CE", "SYMBOL_CE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_STERILE_MTHD", "SYMBOL_STERILE_MTHD_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_IFU", "SYMBOL_IFU_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_SINGLE_USE", "SYMBOL_SINGLE_USE_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF1", "SYMBOL_USER_DEF1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF2", "SYMBOL_USER_DEF2_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF3", "SYMBOL_USER_DEF3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF4", "SYMBOL_USER_DEF4_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_USER_DEF5", "SYMBOL_USER_DEF5_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE1", "IMAGE1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE2", "IMAGE2_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS1", "CO_ADDRESS1_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS2", "CO_ADDRESS2_VERSION"]
			},
			{
				"ReferencedTable" : "STATEMENT_HISTORY",
				"ReferencedFields" : ["STATEMENT_ID", "MAPSEC_Version"],
				"Fields" : ["CO_ADDRESS3", "CO_ADDRESS3_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT1", "LANG_STMT1_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT2", "LANG_STMT2_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT3", "LANG_STMT3_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT4", "LANG_STMT4_VERSION"]
			},
			{
				"ReferencedTable" : "TRANSLATION_HISTORY",
				"ReferencedFields" : ["TRANSLATION_ID", "MAPSEC_Version"],
				"Fields" : ["LANG_STMT5", "LANG_STMT5_VERSION"]
			}
		],
		"CheckConstraints" : [
			{
				"CheckCondition" : "(COO IS NULL AND COO_VERSION IS NULL) OR (COO IS NOT NULL AND COO_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_CE IS NULL AND SYMBOL_CE_VERSION IS NULL) OR (SYMBOL_CE IS NOT NULL AND SYMBOL_CE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_STERILE_MTHD IS NULL AND SYMBOL_STERILE_MTHD_VERSION IS NULL) OR (SYMBOL_STERILE_MTHD IS NOT NULL AND SYMBOL_STERILE_MTHD_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_IFU IS NULL AND SYMBOL_IFU_VERSION IS NULL) OR (SYMBOL_IFU IS NOT NULL AND SYMBOL_IFU_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_SINGLE_USE IS NULL AND SYMBOL_SINGLE_USE_VERSION IS NULL) OR (SYMBOL_SINGLE_USE IS NOT NULL AND SYMBOL_SINGLE_USE_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF1 IS NULL AND SYMBOL_USER_DEF1_VERSION IS NULL) OR (SYMBOL_USER_DEF1 IS NOT NULL AND SYMBOL_USER_DEF1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF2 IS NULL AND SYMBOL_USER_DEF2_VERSION IS NULL) OR (SYMBOL_USER_DEF2 IS NOT NULL AND SYMBOL_USER_DEF2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF3 IS NULL AND SYMBOL_USER_DEF3_VERSION IS NULL) OR (SYMBOL_USER_DEF3 IS NOT NULL AND SYMBOL_USER_DEF3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF4 IS NULL AND SYMBOL_USER_DEF4_VERSION IS NULL) OR (SYMBOL_USER_DEF4 IS NOT NULL AND SYMBOL_USER_DEF4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_USER_DEF5 IS NULL AND SYMBOL_USER_DEF5_VERSION IS NULL) OR (SYMBOL_USER_DEF5 IS NOT NULL AND SYMBOL_USER_DEF5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE1 IS NULL AND IMAGE1_VERSION IS NULL) OR (IMAGE1 IS NOT NULL AND IMAGE1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE2 IS NULL AND IMAGE2_VERSION IS NULL) OR (IMAGE2 IS NOT NULL AND IMAGE2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS1 IS NULL AND CO_ADDRESS1_VERSION IS NULL) OR (CO_ADDRESS1 IS NOT NULL AND CO_ADDRESS1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS2 IS NULL AND CO_ADDRESS2_VERSION IS NULL) OR (CO_ADDRESS2 IS NOT NULL AND CO_ADDRESS2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(CO_ADDRESS3 IS NULL AND CO_ADDRESS3_VERSION IS NULL) OR (CO_ADDRESS3 IS NOT NULL AND CO_ADDRESS3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT1 IS NULL AND LANG_STMT1_VERSION IS NULL) OR (LANG_STMT1 IS NOT NULL AND LANG_STMT1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT2 IS NULL AND LANG_STMT2_VERSION IS NULL) OR (LANG_STMT2 IS NOT NULL AND LANG_STMT2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT3 IS NULL AND LANG_STMT3_VERSION IS NULL) OR (LANG_STMT3 IS NOT NULL AND LANG_STMT3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT4 IS NULL AND LANG_STMT4_VERSION IS NULL) OR (LANG_STMT4 IS NOT NULL AND LANG_STMT4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(LANG_STMT5 IS NULL AND LANG_STMT5_VERSION IS NULL) OR (LANG_STMT5 IS NOT NULL AND LANG_STMT5_VERSION IS NOT NULL)"
			}
		]
	},
	{
		"Name" : "ALL_COUNTRY",
		"Schema" : "DataEditorMultiVersions",
		"Properties" : [],
		"PrimaryKey" : ["ITEM_NUMBER"],
		"Fields" : [
			{
				"Name" : "ITEM_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				},
				"AllowNulls" : "False"
			},
			{
				"Name" : "STANDARD_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CERT_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "CERT_ADDRESS",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CONTACT",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "COMPANY_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SYMBOL_MFG_DIST",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_MFG_DIST_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "MFG_ADDRESS",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DIST_ADDRESS",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "IMAGE1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "IMAGE1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "ARTICLE_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "BATCH",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "MATERIAL",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "UOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "STERILIZATION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "EXP_DATE",
				"Type" :
				{
					"Name" : "DateTime"
				}
			},
			{
				"Name" : "DESCRIPTION1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SYMBOL1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL1_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL2_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL3_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL4_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL5_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "HIBC_CONTROL_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DESCRIPTION_TRANSLATION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "PRODUCT_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SIZE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DESCRIPTION2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DESCRIPTION3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CLASSIFICATION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "COMPONENT_NAME",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "JMDN_CODE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "SYMBOL_SNLOGO",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_SNLOGO_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "SYMBOL_DISTLOGO",
				"Type" :
				{
					"Name" : "String",
					"Size" : 30
				}
			},
			{
				"Name" : "SYMBOL_DISTLOGO_VERSION",
				"Type" :
				{
					"Name" : "int"
				}
			},
			{
				"Name" : "IFU",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "LBL_LEGENDS",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CUSTOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "MISC_DATE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "IMPORT_PETITION",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "USAGE_PURPOSE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "STORAGE_COND",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "IMPORT_AUTH_NUMBER",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "LABEL_REV",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "CE_MARK",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "DOM",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "GTIN",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT1",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT2",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT3",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT4",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "TEXT5",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			},
			{
				"Name" : "BARCODE",
				"Type" :
				{
					"Name" : "String",
					"Size" : 50
				}
			}
		],
		"Indexes" : [],
		"ForeignKeys" : [
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_MFG_DIST", "SYMBOL_MFG_DIST_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["IMAGE1", "IMAGE1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL1", "SYMBOL1_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL2", "SYMBOL2_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL3", "SYMBOL3_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL4", "SYMBOL4_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL5", "SYMBOL5_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_SNLOGO", "SYMBOL_SNLOGO_VERSION"]
			},
			{
				"ReferencedTable" : "IMAGE_HISTORY",
				"ReferencedFields" : ["IMAGE_ID", "MAPSEC_Version"],
				"Fields" : ["SYMBOL_DISTLOGO", "SYMBOL_DISTLOGO_VERSION"]
			}
		],
		"CheckConstraints" : [
			{
				"CheckCondition" : "(SYMBOL_MFG_DIST IS NULL AND SYMBOL_MFG_DIST_VERSION IS NULL) OR (SYMBOL_MFG_DIST IS NOT NULL AND SYMBOL_MFG_DIST_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(IMAGE1 IS NULL AND IMAGE1_VERSION IS NULL) OR (IMAGE1 IS NOT NULL AND IMAGE1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL1 IS NULL AND SYMBOL1_VERSION IS NULL) OR (SYMBOL1 IS NOT NULL AND SYMBOL1_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL2 IS NULL AND SYMBOL2_VERSION IS NULL) OR (SYMBOL2 IS NOT NULL AND SYMBOL2_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL3 IS NULL AND SYMBOL3_VERSION IS NULL) OR (SYMBOL3 IS NOT NULL AND SYMBOL3_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL4 IS NULL AND SYMBOL4_VERSION IS NULL) OR (SYMBOL4 IS NOT NULL AND SYMBOL4_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL5 IS NULL AND SYMBOL5_VERSION IS NULL) OR (SYMBOL5 IS NOT NULL AND SYMBOL5_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_SNLOGO IS NULL AND SYMBOL_SNLOGO_VERSION IS NULL) OR (SYMBOL_SNLOGO IS NOT NULL AND SYMBOL_SNLOGO_VERSION IS NOT NULL)"
			},
			{
				"CheckCondition" : "(SYMBOL_DISTLOGO IS NULL AND SYMBOL_DISTLOGO_VERSION IS NULL) OR (SYMBOL_DISTLOGO IS NOT NULL AND SYMBOL_DISTLOGO_VERSION IS NOT NULL)"
			}
		]
	}
]
