import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { type TUser } from "~/types/types";

const Home: NextPage = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  useEffect(() => {
    const fetchedUsers = [
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
      {
        id: Math.floor(Math.random() * 9999),
        name: "Test",
        count: 30,
      },
    ];
    setUsers(fetchedUsers);
  }, []);
  return (
    <>
      <Head>
        <title>Jiggler Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-w-full justify-center">
        <div className="flex min-w-[33%] flex-col ">
          {users?.map((user) => {
            return (
              <p key={user.id} className="text-start">
                <span className="text-xl outline-2">{user.name}</span> |
                WidestJigglin: {Math.floor(Math.random() * 100)} | Garf:{" "}
                {Math.floor(Math.random() * 100)}
              </p>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
