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

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="border rounded-lg py-6 px-6 bg-white shadow w-">
      <div className="flex justify-center mb-4">
        <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
          {user.firstName[0]}
          {user.lastName[0]}
        </div>
      </div>

      <div className="text-left space-y-1 mb-4">
        <p className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-gray-600 text-sm">Email: {user.email}</p>
        <p className="text-gray-600 text-sm">Status: {user.status}</p>
        <p className="text-gray-600 text-sm">Date of Birth: {user.dob}</p>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="bg-primary text-white px-4 py-2 rounded">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
