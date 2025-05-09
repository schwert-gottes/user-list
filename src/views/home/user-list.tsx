import { UserCard } from "@/components";
import { users } from "@/constants/users";
import type { User } from "@/types/user";
const UserList = () => (
  <main
    className="max-w-[1440px] w-full mx-auto m-4 p-4 mt-24 shadow rounded-lg bg-white"
    role="main"
  >
    <h1 className="text-xl font-semibold text-[#08182E] mb-6">Users List</h1>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      role="list"
      aria-label="List of users"
    >
      {users.map((user: User) => (
        <div key={user.id} role="listitem">
          <UserCard
            name={user.name}
            job={user.job}
            description={user.description}
            image={user.image}
          />
        </div>
      ))}
    </div>
  </main>
);

export default UserList;
