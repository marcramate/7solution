import TodoList from "./Test1/page";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-3  gap-4">
      <div>
        <TodoList />
      </div>
    </div>
  );
}
