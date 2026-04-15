export default function Users({ searchTerm }) {

  const users = [
    { name: "Ali", role: "Admin" },
    { name: "Sara", role: "User" },
    { name: "John", role: "Manager" },
  ];

  const filteredUsers = users.filter(u =>
    Object.values(u)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {filteredUsers.map((u, i) => (
        <div key={i} className="p-2 border-b">
          {u.name} - {u.role}
        </div>
      ))}
    </div>
  );
}