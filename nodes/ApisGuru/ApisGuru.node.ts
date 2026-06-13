import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisGuru implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apis Guru',
                name: 'N8nDevApisGuru',
                icon: { light: 'file:./apis-guru.svg', dark: 'file:./apis-guru.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'OpenAPI format repository for Web API definitions.',
                defaults: { name: 'Apis Guru' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisGuruApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": "Actions relating to APIs in the collection"
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
