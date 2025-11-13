"use client";

import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={classNames(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button
          className={classNames(styles.button, styles.close)}
          onClick={close}
        >
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image
          className={styles.button}
          src="/menu.svg"
          alt="メニュー"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
