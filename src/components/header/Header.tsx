import React, { MouseEvent, SyntheticEvent, useState } from "react";

import "./header.css";
import { items } from "./models";


const Header = () => {

	const handleLinkActive = (e: MouseEvent<HTMLLIElement>) => {
		document.querySelector('li.active')?.classList.remove('active');
		e.currentTarget.classList.add('active');
	}

  return (
	<header className="header">
	  <div className="header__left">
				<h1 className="header__title">J_ESCURRA</h1>
			</div>
	  <nav className="header__nav">
				<ul className="header__list">
					{
						items.map(item => (
							<li key={item.title} className="header__item" onClick={handleLinkActive}>
								<a className="header__item-link" href={item.href}>
									<p className="header__item-text">{item.title}</p>
									<img className="header__item-icon" src={item.icon}></img>
								</a>
							</li>
						))
					}
				</ul>
	  </nav>
	</header>
  );
};

export default Header;
