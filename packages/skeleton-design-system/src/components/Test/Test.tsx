import React from "react";
import styles from "./Test.module.css";

interface TestProps {
  children: React.ReactNode;
}

export const Test = ({ children, ...props }: TestProps) => {
  return (
    <div className={styles.div} {...props}>
      {children}
    </div>
  );
};
