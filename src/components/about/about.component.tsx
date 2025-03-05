export const AboutUsSection = () => {
  return (
    <div className="w-full bg-[#f9fafb] py-16">
      <div className="container mx-auto text-center flex flex-col items-center gap-8 px-4">
        <span className="bg-[#02aaa4] text-white px-4 py-1 rounded-full text-sm font-semibold">
          About Us
        </span>
        <h2 className="text-4xl font-bold text-[#0a0a0a]">
          We are passionate about{" "}
          <span className="text-[#02aaa4]">empowering learners</span>
        </h2>
        <p className="text-lg text-[#555555] max-w-[800px]">
          Worldwide with high-quality, accessible & engaging education. Our
          mission offering a diverse range of courses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#0a0a0a]">25+</h3>
            <p className="text-[#555555]">
              Years of eLearning Education Experience
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#0a0a0a]">56k</h3>
            <p className="text-[#555555]">Students Enrolled in our Courses</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#0a0a0a]">170+</h3>
            <p className="text-[#555555]">Experienced Teacher's Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};
