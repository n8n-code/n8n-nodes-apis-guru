import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "List AP Is",
					"value": "List AP Is",
					"action": "List all APIs",
					"description": "List all APIs in the directory.\nReturns links to the OpenAPI definitions for each API in the directory.\nIf API exist in multiple versions `preferred` one is explicitly marked.\nSome basic info from the OpenAPI definition is cached inside each object.\nThis allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/list.json"
						}
					}
				},
				{
					"name": "Get Metrics",
					"value": "Get Metrics",
					"action": "Get basic metrics",
					"description": "Some basic metrics for the entire directory.\nJust stunning numbers to put on a front page and are intended purely for WoW effect :)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics.json"
						}
					}
				},
				{
					"name": "Get Providers",
					"value": "Get Providers",
					"action": "List all providers",
					"description": "List all the providers in the directory\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers.json"
						}
					}
				},
				{
					"name": "Get API",
					"value": "Get API",
					"action": "Retrieve one version of a particular API",
					"description": "Returns the API entry for one specific version of an API where there is no serviceName.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/specs/{{$parameter[\"provider\"]}}/{{$parameter[\"api\"]}}.json"
						}
					}
				},
				{
					"name": "Get Service API",
					"value": "Get Service API",
					"action": "Retrieve one version of a particular API with a serviceName.",
					"description": "Returns the API entry for one specific version of an API where there is a serviceName.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/specs/{{$parameter[\"provider\"]}}/{{$parameter[\"service\"]}}/{{$parameter[\"api\"]}}.json"
						}
					}
				},
				{
					"name": "Get Provider",
					"value": "Get Provider",
					"action": "List all APIs for a particular provider",
					"description": "List all APIs in the directory for a particular providerName\nReturns links to the individual API entry for each API.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"provider\"]}}.json"
						}
					}
				},
				{
					"name": "Get Services",
					"value": "Get Services",
					"action": "List all serviceNames for a particular provider",
					"description": "List all serviceNames in the directory for a particular providerName\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"provider\"]}}/services.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /list.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"List AP Is"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /providers.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /specs/{provider}/{api}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get API"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"required": true,
			"default": "apis.guru",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get API"
					]
				}
			}
		},
		{
			"displayName": "API",
			"name": "api",
			"required": true,
			"default": "2.1.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get API"
					]
				}
			}
		},
		{
			"displayName": "GET /specs/{provider}/{service}/{api}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Service API"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"required": true,
			"default": "apis.guru",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Service API"
					]
				}
			}
		},
		{
			"displayName": "Service",
			"name": "service",
			"required": true,
			"default": "graph",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Service API"
					]
				}
			}
		},
		{
			"displayName": "API",
			"name": "api",
			"required": true,
			"default": "2.1.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Service API"
					]
				}
			}
		},
		{
			"displayName": "GET /{provider}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Provider"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"required": true,
			"default": "apis.guru",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /{provider}/services.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"required": true,
			"default": "apis.guru",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
];
