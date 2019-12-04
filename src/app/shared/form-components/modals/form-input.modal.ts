export interface FormInputModal {
    "type": String,
    "priority": Number,
    payload: {
        "placeholder": String,
        "label": String,
        "name": String,
        "value": String,
        "options": {
            "label": "Finance",
            "value": "finance"
        },
        "validation": {
            "empty": String,
            "maxlength": {
                "value": Number,
                "message": String
            },
            "minlength": {
                "value": 6,
                "message": "EmployeeId should 6 charaters"
            }
        }
    }
}