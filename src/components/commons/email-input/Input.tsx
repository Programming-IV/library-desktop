import './Input.css';

interface InputEmail {
  content: string;
  placeholder: string;
  type: string;
}

function Input (props:InputEmail) {
  const content = props.content;
  const placeholder = props.placeholder;
  const type = props.type;

  return (
    <div className="container-input">
      <h3 className='content-input'>
        {content}
      </h3>
      <input type={type} className="inputField" placeholder={placeholder} />
    </div>
  )
}

export default Input;