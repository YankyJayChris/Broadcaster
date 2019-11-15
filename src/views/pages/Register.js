import Utils from '../../services/Utils.js';

let Register = {

    render: async () => {
        return /*html*/ `
            <div class="landing-page">
                <div class="signup-form card">
                    <div class="call-out">
                        <h1>Broadcaster</h1>
                        <p>sign up  to create red-flag or intervention</p>
                    </div>
                    <form >
                        <div class="form-field">
                            <label for="fname">First Name</label>
                            <input
                            type="text"
                            class="f_input"
                            name="fname"
                            placeholder="Your name.."
                            />
                        </div>
                        <div class="form-field">
                            <label for="lname">Last Name</label>
                            <input
                            type="text"
                            class="f_input"
                            name="lname"
                            placeholder="Your last name.."
                            />
                        </div>
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input
                            type="text"
                            class="f_input"
                            name="email"
                            placeholder="Your Email.."
                            />
                        </div>
                        <div class="form-field">
                            <label for="phone">Phone</label>
                            <input
                            type="phone"
                            class="f_input"
                            name="phone"
                            placeholder="Your Phone number.."
                            />
                        </div>
                        <div class="form-field">
                            <label for="password">password</label>
                            <input
                            type="password"
                            class="f_input"
                            name="password"
                            placeholder="Your password"
                            />
                        </div>
                        <div class="form-field">
                            <label for="re-password">Confirm Password</label>
                            <input
                            type="password"
                            class="f_input"
                            name="re-password"
                            placeholder="confirm password"
                            />
                        </div>
                        <button class="btn sign-up-btn full-width">Sign up</button>
                        <div class="call-out">
                            <span>have an account? <a href="/Broadcasterapp/#/" class="link login-link">Log in</a></span>
                        </div>
                    </form>
                </div>
            <div>
        `;
    },
    // All the code related to DOM interactions and controls 
    events: async () => { 
        document.querySelector(".login-link").addEventListener("click", e => {
          e.preventDefault();
          Utils.routeTo("/#/");
        });
        document.querySelector(".sign-up-btn").addEventListener("click", e => {
          e.preventDefault();
          Utils.routeTo("/#/home");
        });
    }
}

export default Register;