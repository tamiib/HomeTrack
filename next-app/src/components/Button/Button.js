import clsx from 'clsx';

import Link from 'next/link';

import styles from "./Button.module.scss";

const Button = ({ to, styleClass, children, icon, style }) => {
    const btnStyle = clsx({
        [styles.btn]: true,
        [styles[styleClass]]: !!styleClass,
    })
  const content = (
    <>
      {!!icon && <img src={icon} alt="icon" className={styles.icon} />}
      <span>{children}</span>
    </>
  );

  if (!to) {
    return <button className={btnStyle} style={style}>{content}</button>;
  }
  return <Link href={to} className={btnStyle} style={style}>{content}</Link>;
};

export default Button;
