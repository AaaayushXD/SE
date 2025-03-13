import { CourseCard } from "@/common";

interface FeaturedCoursesProps {
  courses: Courses.CourseCard[];
}

export const FeaturedCourses = ({ courses }: FeaturedCoursesProps) => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <p className="text-muted-foreground mt-2">
            Our highest-rated and most popular courses
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} course={course} featured={true} />
        ))}
      </div>
    </section>
  );
};
