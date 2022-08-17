import HomepageSection from "../../components/HomepageSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomepageSection>
        <>
          <h1>
            The purpose of this application is having random implementations,
            for study purposes (or fun).
          </h1>
          <h3>
            Made using Javascript, React, love and coffee. <p>☕</p>
          </h3>
        </>
      </HomepageSection>
      <HomepageSection>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nesciunt dignissimos culpa sapiente optio provident! Quod,
          consectetur? Deleniti ducimus veniam rem aliquam dignissimos
          recusandae accusamus non, vero, dolores quisquam sunt.
        </h5>
      </HomepageSection>
    </>
  );
}
