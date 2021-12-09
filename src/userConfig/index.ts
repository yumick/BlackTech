const accessName: string = "user";

interface ILoginUser {
  username: string;
  userId: string;
  token: string;
  storageType: "localStorage" | "sessionStorage" | null;
}

export const getLoginUser = (): ILoginUser | null => {
  if (localStorage.getItem(accessName)) {
    const userData = localStorage.getItem(accessName);
    return userData !== null ? JSON.parse(userData) : null;
  } else if (sessionStorage.getItem(accessName)) {
    const userData = sessionStorage.getItem(accessName);
    return userData !== null ? JSON.parse(userData) : null;
  }
  return null;
};

export const setLoginUser = (storageType: string, data: any) => {
  if (storageType === "localStorage") {
    localStorage.setItem(accessName, data);
  } else {
    localStorage.setItem(accessName, data);
  }
};
