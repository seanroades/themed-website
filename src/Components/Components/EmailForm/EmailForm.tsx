import '../../../App.scss'
import './EmailForm.scss'
import Form from 'react-bootstrap/Form'

function EmailForm() {
  return (
    <div className="InlineMod">
      <Form.Control className="custom-input" type="text" placeholder="Email" />
    </div>
  )
}

export default EmailForm;
