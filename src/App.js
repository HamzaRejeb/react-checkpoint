import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My First React Project</h1>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span class="input-group-text">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
}

export default App;
