// import components
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="section relative">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Check how much you can earn
          </h2>
          <p
            className="section-subtitle text-lg mb-16 font-thin max-w-[622px] mx-auto"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        {/* calculate form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
