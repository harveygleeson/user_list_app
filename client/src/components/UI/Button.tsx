import "./Button.css";

type buttonProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = (props: buttonProps) => {
  const classes = "button " + props.className;
  return (
    <button type="button" className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
