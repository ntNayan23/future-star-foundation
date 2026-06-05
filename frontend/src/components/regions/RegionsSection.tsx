
import Pills from "./Pills";

const RegionsSection = () => {
  return (
    <section className="bg-white py-12 md:py-10">
      
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-[28px] font-semibold leading-tight text-[#0F3D5E] sm:text-3xl md:text-4xl">
          Serving Students Across Nagpur & Maharashtra
        </h2>

        {/* Region Pills */}
        <Pills />

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600">
          Our presence in key hubs ensures on-ground
          support and direct counselling for students
          from diverse educational backgrounds across
          the Vidarbha region.
        </p>

      </div>
    </section>
  );
};

export default RegionsSection;