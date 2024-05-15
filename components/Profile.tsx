import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      // first we should validate that the information is correct with initData but we can use initDataUnsafe for now
      // how to validate: https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
      const telegram_user = window.Telegram.WebApp.initDataUnsafe?.user
      setUser(telegram_user)
    }
  }, [window.Telegram?.WebApp])
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Profile</h2>
      <p className="mt-2">Welcome to the profile page!</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold">User details</h3>
        <p className="mt-2">
          ID: {user?.id}
        </p>
        <p className="mt-2">
          First name: {user?.first_name}
        </p>
        <p className="">
          Last name: {user?.last_name}
        </p>
        <p className="">
          Username: {user?.username}
        </p>
        <p className="">
          Language code: {user?.language_code}
        </p>
        <p className="">
          Is premium: {user?.is_premium ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
