import { UUID } from "crypto";

type TransactionProps = {
  type: "deposit" | "withdraw";
  created_at: string;
  ammount: number;
};

export type UserProps = {
  id: UUID;
  email: string;
  password: string;
  name: string;
  balance: number;
  transactions: TransactionProps[];
};

const users: UserProps[] = [
  {
    id: "8418bd02-4bff-46e8-b864-31c021df0e31",
    email: "conta@email.com",
    password: "e10adc3949ba59abbe56e057f20f883e",
    name: "Carlos Oliveira",
    balance: 5000.0,
    transactions: [
      {
        type: "deposit",
        created_at: "2023-10-21 20:50:01.957761+00",
        ammount: 500.0,
      },
      {
        type: "withdraw",
        created_at: "2023-10-22 18:50:01.957761+00",
        ammount: 250.0,
      },
      {
        type: "withdraw",
        created_at: "2023-10-22 10:50:01.957761+00",
        ammount: 100.0,
      },
      {
        type: "deposit",
        created_at: "2023-10-22 08:57:01.957761+00",
        ammount: 250.0,
      },
    ],
  },
];

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(users);
  }, 2500);
});
