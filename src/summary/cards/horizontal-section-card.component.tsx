import React from "react";
import styles from "./horizontal-section-card.css";

export default function HorizontalSectionCard(
  props: HorizontalSectionCardProps
) {
  return <div className={styles.container}>{props.children}</div>;
}

type HorizontalSectionCardProps = {
  children: React.ReactNode;
};