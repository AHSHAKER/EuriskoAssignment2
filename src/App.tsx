import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { useState } from "react";

enum Status {
  Active = "Active",
  Locked = "Locked",
}

type User = {
  firstName: string;
  lastName: string;
  email: string;
  status: Status;
  dob: string;
};

const dummyUsers: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    status: Status.Active,
    dob: "1990-01-01",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    status: Status.Locked,
    dob: "1988-06-15",
  },
  {
    firstName: "John2",
    lastName: "Doe2",
    email: "john2@example.com",
    status: Status.Active,
    dob: "1990-01-01",
  },
  {
    firstName: "Jane2",
    lastName: "Smith2",
    email: "jane2@example.com",
    status: Status.Locked,
    dob: "1988-06-15",
  },
  {
    firstName: "John3",
    lastName: "Doe3",
    email: "john3@example.com",
    status: Status.Active,
    dob: "1990-01-01",
  },
  {
    firstName: "Jane3",
    lastName: "Smith3",
    email: "jane3@example.com",
    status: Status.Locked,
    dob: "1988-06-15",
  },
  {
    firstName: "John4",
    lastName: "Doe4",
    email: "john4@example.com",
    status: Status.Locked,
    dob: "1990-01-01",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = dummyUsers.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <input
          type="text"
          placeholder="Search users..."
          className="mb-4 p-2 w-full md:w-3/4 lg:w-2/4 xl:w-1/4 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
