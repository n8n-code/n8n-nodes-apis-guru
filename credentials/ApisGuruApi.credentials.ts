import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisGuruApi implements ICredentialType {
        name = 'N8nDevApisGuruApi';

        displayName = 'Apis Guru API';

        icon: Icon = { light: 'file:../nodes/ApisGuru/apis-guru.svg', dark: 'file:../nodes/ApisGuru/apis-guru.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.apis.guru/v2',
                        required: true,
                        placeholder: 'https://api.apis.guru/v2',
                        description: 'The base URL of your Apis Guru API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
