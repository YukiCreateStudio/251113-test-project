import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: Props) {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
