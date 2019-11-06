let Login = {
  render: async () => {
    return /*html*/ `
            <div class="landing-page">
                <div class="forget-form card">
                    <div class="call-out">
                        <h1>Broadcaster</h1>
                        <p>submit your email and you will get email to change password</p>
                    </div>
                    <form >
                        <div class="form-field">

                            <label for="email">Email</label>
                            <input
                            type="text"
                            class="f_input"
                            name="email"
                            placeholder="Your Email.."
                            />
                        </div>
                        <input class="btn" type="submit" value="submit"/>
                        <div class="call-out">
                            <span>My account <a href="/Broadcasterapp/#/" class="link signup-link">Login</a></span>
                        </div>
                    </form>
                </div>
            <div>
        `;
  },
  // All the code related to DOM interactions and controls
  events: async () => {}
};

export default Login;
