import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./UserButton.scss";
import {
  Icon56UserCircleOutline,
  Icon56BookmarkOutline,
  Icon56NotificationOutline,
  Icon56SettingsOutline,
} from "@vkontakte/icons";
import { Transition } from "react-transition-group";

function UserButton({ data }) {
  const [activeMenuModal, setActiveMenuModal] = useState(false);
  const menuModalRef = useRef(null);

  const menuButtons = [
    {
      id: 1,
      title: "Профиль пользователя",
      icon: <Icon56UserCircleOutline width={25} height={25} />,
    },
    {
      id: 2,
      title: "Закладки",
      icon: <Icon56BookmarkOutline width={25} height={25} />,
    },
    {
      id: 3,
      title: "Уведомления",
      icon: <Icon56NotificationOutline width={25} height={25} />,
    },
    {
      id: 4,
      title: "Настройки",
      icon: <Icon56SettingsOutline width={25} height={25} />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuModalRef.current &&
        !menuModalRef.current.contains(event.target)
      ) {
        setActiveMenuModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuModalRef} className="userButtonContainer">
      <button onClick={() => setActiveMenuModal((prev) => !prev)}>
        {data.loginUser}
      </button>

      <Transition in={activeMenuModal} timeout={500}>
        {(activeMenuModal) => (
          <div className={`userMenu ${activeMenuModal}`}>
            {menuButtons.map((button) => (
              <Link key={button.id} to={`/user/${data.idUser}`}>
                <button onClick={() => setActiveMenuModal(false)}>
                  {button.icon}
                  {button.title}
                </button>
              </Link>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default UserButton;
