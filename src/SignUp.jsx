
import styles from './SignUp.module.css'
import blossomFlower from './assets/blossom-flower.svg'
import googleLogo from './assets/icons-google-logo.svg'
import appleLogo from './assets/icons-apple-logo.svg'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>

        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className={styles.agreement}>
            <input type="checkbox" />
            <span>I agree to the terms &amp; policy</span>
          </label>

          <button className={styles.signupButton} type="submit">
            Signup
          </button>
        </form>

        <div className={styles.divider}>
          <span></span>
          <span className={styles.orText}>Or</span>
          <span></span>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton} type="button">
            <img src={googleLogo} alt="" />
            <span>Sign in with Google</span>
          </button>

          <button className={styles.socialButton} type="button">
            <img src={appleLogo} alt="" />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className={styles.bottomText}>
          Have an account? <a href="#">Sign In</a>
        </p>
      </section>

      <section className={styles.rightSection}>
        <img
          src={blossomFlower}
          alt="Blossom flower"
          className={styles.flower}
        />
      </section>
    </main>
  )
}

export default SignUp
