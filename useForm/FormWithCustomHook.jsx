import { useForm } from "./useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  return (
    <>
      <h1>Form with custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="maitepv@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Delete
      </button>
    </>
  );
};
