import Ajv from 'ajv';

const validate = (data: any, schema: any): boolean => {
  const ajv = new Ajv();
  const compile = ajv.compile(schema);
  return compile(data);
};

export default validate;
