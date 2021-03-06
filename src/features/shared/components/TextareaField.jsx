import React from 'react'
import pick from 'lodash/pick'
import { FieldLabel } from 'features/shared/components'
import disableAutocomplete from 'utility/disableAutocomplete'

const TEXT_FIELD_PROPS = [
  'value',
  'onBlur',
  'onChange',
  'onFocus',
  'name'
]

class TextareaField extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const fieldProps = pick(this.props.fieldProps, TEXT_FIELD_PROPS)
    const {touched, error} = this.props.fieldProps

    return(
      <div className='form-group'>
        {this.props.title && <FieldLabel>{this.props.title}</FieldLabel>}
        <textarea className='form-control'
               title={fieldProps.value||''}
          placeholder={this.props.placeholder}
          autoFocus={!!this.props.autoFocus}
          {...disableAutocomplete}
          {...fieldProps} />

        {touched && error && <span className='text-danger'><strong>{error}</strong></span>}
        {this.props.hint && <span className='help-block'>{this.props.hint}</span>}
      </div>
    )
  }
}

export default TextareaField
