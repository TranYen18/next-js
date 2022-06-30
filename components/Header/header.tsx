import style from './header.module.scss';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <h1>Header</h1>
    {/* <ul>
        <li>
            <Link href="">Home</Link>
        </li>
        <li>
            <Link href="about">About</Link>
        </li>
        <li>
            <Link href="product">Product</Link>
        </li>
    </ul> */}
    <div>
        <ul className={style.menu}>
            <li><a href='' className={style.menu__link}>menu 1</a></li>
            <li><a href='' className={style.menu__link}>menu 2</a></li>
            <li><a href='' className={style.menu__link}>menu 3</a></li>
            <li><a href='' className={style.menu__link}>menu 4</a></li>
        </ul>
    </div>
</>
  )
}

export default Header