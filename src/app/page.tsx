
export default function Home() {
  return (
    <>
      <section className="p-6 mt-5 max-w-3xl mx-auto flex">
        <h2 className="text-5xl font-bold mr-5 text-center text-[var(--text)] flex items-center">Welcome!</h2>
        <p className="text-[var(--text)] text-justify">
          Hi! My name is Marvell, a fresh graduate from Nanyang Technological University (NTU) with a degree in Computer Science. 
          I am currently looking for a full-time position in software engineering, data analytics, and cybersecurity. 
        </p>
      </section>

      <section className="p-6 max-w-3xl mx-auto flex">
        <section className="text-[var(--text)] flex-3 text-justify">
          <p >
            I have an avid interest in creation (hence this website), and as a result am trained in development languages such as HTML, CSS, JavaScript, TypeScript, and Python.
            I am also familiar with frameworks such as React, Next.js, and Express.js.
          </p>
          <p >
            <br />
            I like to make sense of the world around me, and draw patterns from data, using tools such as SQL, Pandas, and NumPy. 
          </p>
        </section>
        <h2 className="text-5xl font-bold mr-5 text-right text-[var(--text)] flex-1 flex items-center justify-center">About me</h2>
      </section>

      <section className="p-6 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mr-5 text-center text-[var(--text)] flex items-center">You can take a look at my projects here!</h2>

        <a href="/projects" className="bg-[var(--foreground)] text-[var(--background)] px-10 py-5 rounded-lg shadow-md hover:bg-[var(--highlight)] transition duration-300 flex items-center justify-center mt-5">
          <button className="text-lg font-semibold text-xl justify-">View Projects</button>
        </a>
      </section>
      

      <section  className="p-6 mt-5 max-w-3xl mx-auto bg-[var(--text)] mb-6 rounded-lg shadow-lg">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <img src={"/images/Merbabu.jpg"} alt={`Admiring the view of Mt. Merbabu`} className="w-full h-full object-cover rounded-lg" />
          <img src={"/images/HOCC.png"} alt={`Partnerwork during a dance competition`} className="w-full h-full object-cover rounded-lg" />
          <img src={"/images/WIL.jpg"} alt={`Performance gig at Boon Lay Community Center`} className="w-full h-full object-cover rounded-lg"/>
        </div>

      <section className="p-3 mt-5 max-w-3xl mx-auto flex text-[var(--background)] ">
        <h2 className="text-5xl font-bold mr-5 text-center flex items-center">MORE me</h2>
        <p className="text-justify">
          Besides my interest in technology, I also have a passion for dance, which I have been pursuing for over 3 years. I have both choreographed and competed in various events, such as 
          World Supremacy Battleground (WSB) and Super 24 (S24). I also enjoy performing at community events, to share my love for dance with others.
          <br />
          <br />
          Additionally, I have a keen interest in content creation and drawing, as forms of creative outlets to express myself.
        </p>
      </section>
      </section>
    </>
  );
}
