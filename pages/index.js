import { useEffect, useState } from 'react';

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
      <div className="container">
        <nav className='nav'>
          <div className="mybrand">My Personal Site</div>
          <div>
            {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
          </div>
        </nav>
        <section>
          <div className="heroSection">
            <h1>👋 I'm Jumama</h1>
            <h3>I am a Software Engineer, Frontend Developer and a Content Creator</h3>
            <p>
              You can find me on <span><a target='_blank' href="https://www.instagram.com/jumacodes/?hl=en">Instagram</a> </span> 
               where i talk about Software Development topics. I am glad You are here. I would like to talk talk and speak to new happy faces to share my working process and tech talks with you.
            </p>
            <button className="primary-btn">Connect with me</button>
        </div>
      </section>
    </div>
    </>
  )
}


export default HomePage