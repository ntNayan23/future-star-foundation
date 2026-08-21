import CourseCard from "./CourseCard";
import { courses } from "./coursesData";



const CoursesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* TOP CONTENT */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="eyebrow mb-4 inline-flex rounded-full bg-[#14B8A6]/10 px-4 py-2 text-[#14B8A6]">
              Academic Programs
            </div>

            {/* Heading */}
            <h2 className="section-title max-w-xl text-[#0F3D5E]">
              Premier Courses
              <span className="text-[#14B8A6]"> We Support</span>
            </h2>
          </div>

          {/* RIGHT */}
          <p className="max-w-md text-base leading-7 text-[#5B6475]">
            From Engineering to Healthcare, we provide
            comprehensive admission support for India’s
            most sought-after programs.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
              badge={course.badge}
              icon={course.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;