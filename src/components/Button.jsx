import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  /*bhenchod woow , all the styling here no css faltu ka
    1.take care of basics
    2.specials inputs if any*/
  const classes = `button relative inline-flex items-center justify-center h-11 transition:colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"}
   ${className || " "}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  /* if we want to render a link not a button*/
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  /*since now we have two returns we will chhose waht to return when*/
  return href ? renderLink() : renderButton();
};

export default Button;
