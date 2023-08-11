import './ButtonWithoutBackground.css'

interface ButtonWithoutBackgroundProps {
    text: string,
    onClick?: () => void;
}

function ButtonWithoutBackground (props:ButtonWithoutBackgroundProps) {
  const text = props.text;
  const onClick = props.onClick;

  return (
    <div>
      <button onClick={() => onClick} type="button" className="ButtonWithoutBackground">
        {text}
      </button>
    </div>
  )
}

export default ButtonWithoutBackground;
