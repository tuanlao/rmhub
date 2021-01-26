import { JSONSchemaType } from 'ajv';
import { TestResponse } from 'models';

export const ResponseSchema: JSONSchemaType<TestResponse> = {
  type: 'object',
  required: ['content'],
  properties: {
    content: {
      type: 'array',
      items: {
        type: 'array',
        items: {
          type: 'object',
          required: ['id', 'content'],
          properties: {
            id: {
              type: 'string',
            },
            content: {
              type: 'object',
              required: ['contentType'],
              properties: {
                displayMode: { type: 'string', nullable: true },
                contentType: { type: 'string' },
                data: { type: 'string', nullable: true },
                fontType: { type: 'string', nullable: true },
                fontSize: { type: 'string', nullable: true },
              },
            },
            span: {
              type: 'object',
              nullable: true,
              required: [],
              properties: {
                col: { type: 'integer', nullable: true, minimum: 1 },
                row: { type: 'integer', nullable: true, minimum: 1 },
              },
            },
          },
        },
      },
    },
  },
};
