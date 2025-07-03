type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write", "delete"],
};

console.log(adminUser);
