import Image from "next/image";

export default function About() {
  return (
    <>
      <body>
        <header>
          <h1>About</h1>
          <p>Hi! My name is Priyanka! Here's a bit about me</p>
        </header>

        <main>
          <div className="about-container">
            <div className="about-image">
              <Image
                src="/me.jpg"
                alt="Photo of me"
                width={300}
                height={400}
              />
            </div>

            <div className="about-paragraph">
              <p>
                I am a Bachelor of Engineering student at AUT specialising in Software.
                Starting university was overwhelming for me. There were so many systems,
                expectations, and choices to navigate, and often it felt like everyone else
                knew what they were doing while I was still trying to make sense of it all.
              </p>

              <p>
                I realised how helpful it would have been to have one calm place that explained
                things before starting university in Year 13, and continued to support students
                as they go through it. UniHelp NZ was created to do exactly that — to offer clear,
                practical guidance that helps students feel less lost and more confident.
              </p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
