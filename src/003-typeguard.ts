// type guard

// in, typeof

type alphaNumeric = number | string;

const add = (num1: alphaNumeric, num2: alphaNumeric) => {
  //type guard or type narrowing
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

add(2, 2); // 4
add(2, "2"); // 22
add("2", 2); // 22

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: string;
};

const getuserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role is : ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getuserInfo({ name: "Ashraf" });
