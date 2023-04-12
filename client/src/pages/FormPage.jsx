import React from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';


const schema = {
  title: 'Restaurant Booking',
  type: 'object',
  required: ['name', 'phoneNumber', 'beginTime', 'Hairdresser'],
  properties: {
    name: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },

        BeginTime: {
          "type": "string",
          "format": "date-time"
        },

    peopleNumber: {
      title: 'People Number',
      type: 'number',
      enum: [' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ', ' 6 ', ' 7 ', ' 8 '],
      enumNames: ["1", "2", "3", "4", "5", "6", "7", "8"],
      default: '1',
    },

    Hairdresser: {
      type: 'string',
    },
    note: {
      type: 'string',
      title: 'Note',
      format: 'textarea',
    },
  },
};

const uiSchema = {
  'ui:title': (
    <div
      style={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '1rem',
      }}
    >
      {schema.title}
    </div>
  ),
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
  phoneNumber: {
    'ui:title': 'Phone Number',
    'ui:placeholder': 'Enter your phone number',
    'ui:options': {
      classNames: 'form-control',
      inputType: 'text',
      label: false,
      fontSize: '24px',
      textAlign: 'center',
    },
  },

  BeginTime: {
    classNames: 'd-flex flex-column align-items-start',
    'ui:title': (
      <div
        style={{
          fontSize: '24px',
          marginBottom: '1rem',
          fontWeight: 'bold',
          textAlign: 'left',
          width: '100%',
        }}
      >
        Begin Time
      </div>
    ),
    'ui:widget': 'date-time',
    'ui:options': {
      classNames: 'form-control',
      inputProps: {
        style: {
          textAlign: "left",
          fontSize: "20px",
          fontFamily: "Arial, sans-serif",
          width: "20cm"
        }
      }
      // marginBottom: '1rem',
    },

  },
  
   
  peopleNumber: {
    classNames: 'd-flex justify-content-center',
    'ui:title': (
      <div
        style={{
          fontSize: '24px',
          marginBottom: '1rem',
          marginTop: '1rem',
          textAlign: 'left',
          fontWeight: 'bold',
          width: '100%',
        }}
      >
        People Number
      </div>
    ),

    'ui:widget': 'select',
    'ui:options': {
      enumNames: ["1&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;", "2", "3", "4", "5", "6", "7", "8"],
      
      // 将className设置为w-100
      className: 'w-100',
      label: true,
      inline: true,
      disabled: false,
      labelPosition: 'top',
      style: {
        fontSize: '15px',
        textAlign: 'center',
        width: '100%',
      },
      inputProps: {
        style: {
          width: 'auto',
          height: '50px',
          fontSize: '56px',
        },
      },
    },
  },
  
  
  Hairdresser: {
    'ui:title': 'Hairdresser',
    'ui:placeholder': 'Enter hairdresser name',
    'ui:options': {
      classNames: 'form-control',
      marginTop: '1rem',
      inputType: 'text',
      label: false,
      fontSize: '24px',
      textAlign: 'center',
    },
  },
  note: {
    'ui:title': 'Note',
    'ui:placeholder': 'Enter note',
    'ui:options': {
      classNames: 'form-control',
      inputType: 'text',
      label: false,
      style: { width: 'auto' },
      fontSize: '36px',
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
      style={{ fontSize: '20px', padding: '5px', width: '100%', border: '2px solid #ccc' }}
    />
  </div>
);

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

// import React from 'react';
// import Form from '@rjsf/core';
// //import { RJSFSchema } from '@rjsf/utils';
// import validator from '@rjsf/validator-ajv8';

// const schema = {
//   type: 'object',
//   properties: {
//     name: { type: 'string' },
//     'appointment time': { type: 'string' },
//     autour: { type: 'string' },
//   },
//   required: ['name', 'appointment time', 'autour'],
// };


// const uiSchema = {
//   name: {
//     'ui:title': 'Name',
//     'ui:placeholder': 'Enter your name',
//     'ui:options': {
//       classNames: 'form-control mt-4',
//       inputType: 'text',
//       label: false,
//       fontSize: '24px',
//       textAlign: 'center',
//     },
//   },

//   'appointment time': {
//     'ui:title': 'Appointment Time',
//     'ui:placeholder': 'Enter your appointment time',
//     'ui:options': {
//       classNames: 'form-control',
//       inputType: 'text',
//       label: false,
//       fontSize: '24px',
//       textAlign: 'center',
//     },
//   },

//   autour: {
//     'ui:title': 'Autour',
//     'ui:placeholder': 'Enter autour name',
//     'ui:options': {
//       classNames: 'form-control',
//       inputType: 'text',
//       label: false,
//       fontSize: '24px',
//       textAlign: 'center',
//     },
//   },
// };

// const log = (type) => console.log.bind(console, type);

// const CustomInputWidget = ({ id, label, value, required, onChange }) => (
//   <div style={{ marginBottom: '20px', textAlign: 'center' }}>
//     <label
//       htmlFor={id}
//       style={{
//         display: 'block',
//         fontSize: '24px',
//         fontWeight: 'bold',
//         textAlign: 'left',
//         marginBottom: '10px',
//       }}
//     >
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

// const FormPage = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <Form
//         schema={schema}
//         uiSchema={uiSchema}
//         validator={validator}
//         onChange={log('changed')}
//         onSubmit={log('submitted')}
//         onError={log('errors')}
//         widgets={{ TextWidget: CustomInputWidget }}
//         className="col-md-6"
//       >
//          <button
//           type="submit"
//           style={{
//             backgroundColor: 'rgba(220,220,220,0.7)',
//             color: 'white',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             border: 'none',
//             padding: '15px 32px',
//             margin: '20px',
//             borderRadius: '30px',
//             background: 'linear-gradient(45deg, #aaa, #444)',
//             transition: 'background 0.5s ease-out',
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = '#444';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = 'linear-gradient(45deg, #aaa, #444)';
//           }}
//         >
//           Submit
//         </button>
//       </Form>
//     </div>
//   );
// };

// export default FormPage;
