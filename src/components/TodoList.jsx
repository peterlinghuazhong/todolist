import Task from "./TodoItem";

function TodoList() {
  return (
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-success">
            <i class="bi bi-check-square"></i>
          </button>
          <span class="ms-2 text-decoration-line-through">Task 1</span>
        </div>
        <div>
          <button class="btn btn-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-light">
            <i class="bi bi-square"></i>
          </button>
          <span class="ms-2">Task 2</span>
        </div>
        <div>
          <button class="btn btn-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-light">
            <i class="bi bi-square"></i>
          </button>
          <span class="ms-2">Task 3</span>
        </div>
        <div>
          <button class="btn btn-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
