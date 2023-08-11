import './ButtonWithBackground.css';

interface ButtonWithBackgroundProps {
    text: string,
    className: string;
    onClick?: () => void;
}

function ButtonWithBackground (props:ButtonWithBackgroundProps) {
  const text = props.text;
  const onClick = props.onClick;
  const className = props.className;

  return (
    <div>
      <button onClick={() => onClick} type="button" className={className}>
        {text}
      </button>
    </div>
  )
}

export default ButtonWithBackground;
