export interface FieldConfigPayload {
    placeholder?: string,
        label?: string,
        name: string,
        value?: any,
        disabled?: boolean,
        validation: {
            empty: string,
            maxlength: {
                value: number,
                message: string
            }
        }
}

export interface FieldConfig {
  type: string,
  inputType?: string,
  priority: number,
  payload: FieldConfigPayload
}