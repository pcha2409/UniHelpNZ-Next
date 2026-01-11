export default function Figuring() {
  return (
    <>

{/* <!-- HEADER --> */}
    <header>
        <h1>Figuring Out Your Career Path</h1>
        <p>
            You don’t need to have everything figured out.
            This space helps you reflect on what suits you right now.
        </p>
    </header>

    {/* <!-- MAIN CONTENT --> */}
    <main>

        {/* <!-- QUESTIONS --> */}
        <div className="career-section">

            <div className="career-question">
                <label htmlFor="learning">How do you enjoy learning most?</label>
                <select id="learning">
                    <option value="">Select an option</option>
                    <option>Hands-on and practical</option>
                    <option>A mix of theory and practice</option>
                    <option>Mostly theory and concepts</option>
                    <option>I’m not sure yet</option>
                </select>
            </div>

            <div className="career-question">
                <label htmlFor="energy">What type of tasks give you energy?</label>
                <select id="energy">
                    <option value="">Select an option</option>
                    <option>Solving problems and puzzles</option>
                    <option>Helping or working with people</option>
                    <option>Creating or designing things</option>
                    <option>Organising, planning, or improving systems</option>
                    <option>I’m not sure yet</option>
                </select>
            </div>

            <div className="career-question">
                <label htmlFor="environment">What kind of work environment sounds most comfortable right now?</label>
                <select id="environment">
                    <option value="">Select an option</option>
                    <option>Structured and predictable</option>
                    <option>Flexible and changing</option>
                    <option>Team-based</option>
                    <option>Independent</option>
                    <option>I’m not sure yet</option>
                </select>
            </div>

            <div className="career-question">
                <label htmlFor="values">What matters most to you at this stage of life?</label>
                <select id="values">
                    <option value="">Select an option</option>
                    <option>Stability and security</option>
                    <option>Learning and growth</option>
                    <option>Creativity and expression</option>
                    <option>Making a positive impact</option>
                    <option>I’m not sure yet</option>
                </select>
            </div>

            <div className="career-question">
                <label htmlFor="sources">Do you know what trusted sources you can look at in NZ to find out more about your career questions?</label>
                <select id="sources">
                    <option value="">Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

        </div>

        {/* <!-- RESULTS --> */}
        <div className="career-response" id="careerResponse">
            <h2>What this might mean for you</h2>
            <p>
                Select options above to see a reflective summary here.
                There are no right or wrong answers.
            </p>
        </div>

    </main>
    </>
  );
}
