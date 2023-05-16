import React, { useState, useEffect } from 'react';
import { cx } from 'emotion';
import { useMutation } from 'react-query';
import axios from 'axios';
import { authAPI } from '@/constant/apiURL';
import { wrapperLogin } from './_loginPageStyle';
import useLocalStorage from '@/hooks/useLocalStorage';

interface IStateLogin {
  username: string;
  password: string;
}

function Auth() {
  const [isError, setIsError] = useState<boolean>(false);
  const [state, setValue] = useState<IStateLogin>({
    username: '',
    password: '',
  });
  const { getItem } = useLocalStorage();

  useEffect(() => {
    // validasi auth login
    const token = getItem('session', false);
    if (token) {
      window.location.href = '/explore';
    }
  }, []);

  const { setItem } = useLocalStorage();
  const authVerification = (): Promise<object> => {
    return axios
      .post(authAPI, state)
      .then((e) => e.data)
      .catch(() => {
        setIsError(true);
      });
  };

  const mutation = useMutation({
    mutationFn: () => authVerification(),
    onSuccess: (data: any) => {
      // success response
      setItem('session', data.session);
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync();
    } finally {
      window.location.href = '/explore';
    }
  };
  return (
    <section className={cx(wrapperLogin, 'wrapper')}>
      <div className="bg-container"></div>
      <div className="content">
        <h2>Sign in to us</h2>

        {isError && (
          <div className="msg-error">Incorrect username or password.</div>
        )}
        <div className="text-center m-5-auto">
          <form onSubmit={handleSubmit}>
            <p>
              <label>Username or email address</label>
              <br />
              <input
                placeholder="Username"
                type="text"
                name="first_name"
                value={state.username}
                onChange={(e) =>
                  setValue({ ...state, username: e.target.value })
                }
                required
              />
            </p>
            <p>
              <label>Password</label>

              <br />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={state.password}
                onChange={(e) =>
                  setValue({ ...state, password: e.target.value })
                }
                required
              />
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Login
              </button>
            </p>
          </form>
          <footer></footer>
        </div>
      </div>
    </section>
  );
}

export default Auth;
