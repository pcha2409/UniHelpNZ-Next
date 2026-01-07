export default function whichuni() {
  return (
    <>
       {/* <!-- NAVBAR --> */}
    <nav className="navbar">
        

        <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="budgeting.html">Budgeting</a></li>
            <li><a href="academic.html">Academic Help</a></li>
            <li><a href="adjusting.html">Adjusting to Uni Life</a></li>
            <li><a href="figuring.html">Figuring out your career path</a></li>
            <li><a href="which-uni.html">Which Uni should I go to?</a></li>
            <li><a href="about.html">About</a></li>
             <li><a href="student-loan.html">Applying for a student Loan</a></li>
        </ul>
    </nav>

    {/* <!-- MAIN CONTENT --> */}
    <main>

        <h1>Which University Should I Go To?</h1>

        <p>
            This short slide deck walks you through how to think about university fit,
            based on my own experience and questions I wish I had asked earlier.
        </p>

        <iframe 
            src="which-uni-should-i-go-to.pdf"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            ></iframe>

    </main>

    <script src="script.js"></script> </>
  );
}
