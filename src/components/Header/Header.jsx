import React from "react";
import { Icon28SunOutline, Icon28MoonOutline } from "@vkontakte/icons";
import "./Header.css";
import { useHeaderVisible } from "../../hooks/useHeaderVisible";
import { Transition } from "react-transition-group";

function Header({ handleToggleTheme, theme }) {
  const { isVisible } = useHeaderVisible();

  return (
    <Transition in={isVisible} timeout={500}>
      {(isVisible) => (
        <div className={`headerContainer ${isVisible}`}>
          <button onClick={handleToggleTheme}>
            {theme === "light" ? <Icon28MoonOutline /> : <Icon28SunOutline />}
          </button>
        </div>
      )}
    </Transition>
  );
}

export default Header;
