import React from 'react'

function Login(props) {
  const handleSubmit = e => {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    console.log(username, password)
  }

  return (
    <div className="section">
      <main>
        <center>
          <div className="section" />

          <h5 className="indigo-text">Vennligst logg inn på din adminbruker</h5>
          <div className="section" />

          <div className="container">
            <div className="z-depth-1 grey lighten-4 row">
              <form className="col s12" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col s12" />
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input className="validate" type="text" name="username" id="username" />
                    <label htmlFor="username">Skriv ditt brukernavn</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input className="validate" type="password" name="password" id="password" />
                    <label htmlFor="password">Skriv ditt passord</label>
                  </div>
                </div>

                <br />
                <center>
                  <div className="row">
                    <div className="col s12">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect indigo"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>

        <div className="section" />
        <div className="section" />
      </main>
    </div>
  )
}

export default Login
