import { createContext, useState } from "react";

interface IUserValueSettingContext {
  showUserValue: boolean;
  setShowUserValue: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowUserValue: () => void;
}

export const UserValueSettingContext = createContext<IUserValueSettingContext>({
  setShowUserValue: () => {},
  showUserValue: false,
  toggleShowUserValue: () => {},
});

function UserValueSettingProvider({ children }: { children: React.ReactNode }) {
  const [showUserValue, setShowUserValue] = useState(false);

  const toggleShowUserValue = () => {
    setShowUserValue(!showUserValue);
  };

  return (
    <UserValueSettingContext.Provider
      value={{ setShowUserValue, showUserValue, toggleShowUserValue }}
    >
      {children}
    </UserValueSettingContext.Provider>
  );
}

export default UserValueSettingProvider;
