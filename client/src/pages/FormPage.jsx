import React from 'react';
import Form from '@rjsf/core';
//import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    'appointment time': { type: 'string' },
    autour: { type: 'string' },
  },
  required: ['name', 'appointment time', 'autour'],
};


const uiSchema = {
  name: {
    'ui:title': 'Name',
    'ui:placeholder': 'Enter your name',
    'ui:options': {
      classNames: 'form-control mt-4',
      inputType: 'text',
      label: false,
      fontSize: '24px',
      textAlign: 'center',
    },
  },

  'appointment time': {
    'ui:title': 'Appointment Time',
    'ui:placeholder': 'Enter your appointment time',
    'ui:options': {
      classNames: 'form-control',
      inputType: 'text',
      label: false,
      fontSize: '24px',
      textAlign: 'center',
    },
  },

  autour: {
    'ui:title': 'Autour',
    'ui:placeholder': 'Enter autour name',
    'ui:options': {
      classNames: 'form-control',
      inputType: 'text',
      label: false,
      fontSize: '24px',
      textAlign: 'center',
    },
  },
};

const log = (type) => console.log.bind(console, type);

const CustomInputWidget = ({ id, label, value, required, onChange }) => (
  <div style={{ marginBottom: '20px', textAlign: 'center' }}>
    <label
      htmlFor={id}
      style={{
        display: 'block',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: '10px',
      }}
    >
      {label}
    </label>
    <input
      id={id}
      type="text"
      className="form-control"
      value={value || ''}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      style={{ fontSize: '20px', padding: '5px', width: '100%', border: '2px solid #444' }}
    />
  </div>
);

// // 自定义表单元素
// const CustomInputWidget = ({ id, label, value, required, onChange }) => (
//   <div style={{ marginBottom: '20px', textAlign: 'center' }}>
//     <label htmlFor={id} style={{ display: 'block', fontSize: '22px', fontWeight: 'bold', textAlign: 'left' }}>
//       {label}
//     </label>
//     <input
//       id={id}
//       type="text"
//       className="form-control"
//       value={value || ''}
//       required={required}
//       onChange={(event) => onChange(event.target.value)}
//       style={{ fontSize: '20px', padding: '5px', width: '100%', border: '2px solid #444' }}
//     />
//   </div>
// );

const FormPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
        widgets={{ TextWidget: CustomInputWidget }}
        className="col-md-6"
      >
         <button
          type="submit"
          style={{
            backgroundColor: 'rgba(220,220,220,0.7)',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            border: 'none',
            padding: '15px 32px',
            margin: '20px',
            borderRadius: '30px',
            background: 'linear-gradient(45deg, #aaa, #444)',
            transition: 'background 0.5s ease-out',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#444';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(45deg, #aaa, #444)';
          }}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default FormPage;
