import React from "react";
import styles from "./SegmentView.module.css";
import { Segment } from "../../store/tickets/types";
import {
  getReadableDuration,
  getReadableStartToEndTime,
  numberOfTransfersRussian
} from "./ticketViewUtils";

type SegmetnViewProps = {
  segment: Segment;
};
export const SegmentView = (props: SegmetnViewProps) => {
  const { segment } = props;
  const IATA_SEPARATOR = "–";
  return (
    <article className={styles.segment}>
      <div className={styles.segment_part}>
        <p className={styles.key}>
          {segment.origin + IATA_SEPARATOR + segment.destination}
        </p>
        <p className={styles.value}>{getReadableStartToEndTime(segment)}</p>
      </div>
      <div className={styles.segment_part}>
        <p className={styles.key}>В пути</p>
        <p className={styles.value}>{getReadableDuration(segment)}</p>
      </div>
      <div className={styles.segment_part}>
        <p className={styles.key}>{numberOfTransfersRussian(segment)}</p>
        <p className={styles.value}>{segment.stops.join(", ")}</p>
      </div>
    </article>
  );
};
