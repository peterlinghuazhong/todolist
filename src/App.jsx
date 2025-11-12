import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div
        class="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div class="card-body">
          <h3 class="card-title mb-3">My Todo List</h3>
          <TodoList />
          <AddTodoForm />
        </div>
      </div>
    </>
  );
}

export default App;
