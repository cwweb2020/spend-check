import React from 'react';
import g from '../assets/img/g.png';
import ilustrarion from '../assets/img/finanza.png';
import { signInWithGoogle } from '../firebase/auth';

const LandingPage = () => {
  //

  return (
    <>
      <section className="landing-total">
        <div className="wrapper">
          <h1>Lleva un track de todos tus gastos</h1>
          <img style={{ width: '230px', marginBottom: '2.5em' }} src={ilustrarion} alt="" />
          <h3>Ingresa con tu cuenta de google</h3>
          <button onClick={signInWithGoogle}>
            <img src={g} alt="" />
            Accede con Google
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
