// Example schema define

import types from 'verbose-types';
import ui from 'verbose-ui';

const UserSchema = new verbose.createSchema({
    name: {
        // use verbose type api
        type: types.string,

        // specify how this key appears in the dashboard UI
        ui: {
            // use verbose ui api
            type: ui.dropdown,

            // optional UI options depending on ui type
            options: {
                fields: [
                    'project1', 'project2'
                ],
                default: 'project1',
                disabled: false,
                label: 'Username',
                placeholder: ''
            }
        },
        validation: [
            {
                // regex to test input against
                test: '',

                // show if validation fails
                message: ''
            }
        ],
        db: {
            fieldName: 'project', // defaults to parent key name
            fieldType: DateStamp, // defaults to type
            fieldLength: 10, // defaults to max field length for data type
            fieldIndex: true // default to false
        }
    }
})

verbose.addModel('MyModel', UserSchema)
