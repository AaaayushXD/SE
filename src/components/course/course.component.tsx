import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Clock,
  Users,
  ArrowLeft,
  Play,
  FileText,
  Award,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { LayoutComponent } from "../layout";

export const CourseDetailPage = () => {
  const [course, setCourse] = useState<Courses.CourseCard | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();

  console.log(params);
  useEffect(() => {
    // Find the course by ID
    if (!params.id) return;
    const courseId = Number.parseInt(params.id);
    const foundCourse = courses.find((c) => c.id === courseId);

    if (foundCourse) {
      setCourse(foundCourse);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <LayoutComponent>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 container mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
              <div className="h-64 bg-muted rounded mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="h-8 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-8"></div>
                </div>
                <div>
                  <div className="h-64 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutComponent>
    );
  }

  if (!course) {
    return <div>NOT FOUNd</div>;
  }

  return (
    <LayoutComponent>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="bg-muted/30 py-8">
            <div className="container mx-auto px-4">
              <a
                href="/"
                className="inline-flex items-center text-sm mb-4 hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to courses
              </a>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium mr-1">
                        {course.rating.toFixed(1)}
                      </span>
                      <span className="text-muted-foreground">
                        ({course.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {course.students.toLocaleString()} students
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-1 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {course.duration}
                      </span>
                    </div>
                    <Badge>{course.level}</Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt={course.instructor}
                        className="rounded-full h-12 w-12 object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{course.instructor}</h3>
                        <p className="text-sm text-muted-foreground">
                          {course.instructorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-card rounded-lg border overflow-hidden sticky top-20">
                    <div className="aspect-video relative">
                      <img
                        src={
                          course.image ||
                          "/placeholder.svg?height=200&width=350"
                        }
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full h-14 w-14 bg-white text-black hover:bg-white/90 hover:text-black"
                        >
                          <Play className="h-6 w-6 fill-current" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold">
                          ${course.price.toFixed(2)}
                        </div>
                      </div>
                      <Button className="w-full mb-4">Enroll Now</Button>
                      <Button variant="outline" className="w-full mb-6">
                        Add to Wishlist
                      </Button>

                      <div className="text-sm text-muted-foreground">
                        <p className="mb-2">This course includes:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Clock className="h-4 w-4 mr-2 mt-0.5" />
                            <span>{course.duration} of on-demand video</span>
                          </li>
                          <li className="flex items-start">
                            <FileText className="h-4 w-4 mr-2 mt-0.5" />
                            <span>
                              {course.modules.reduce(
                                (acc, module) => acc + module.lessons,
                                0
                              )}{" "}
                              lessons
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Award className="h-4 w-4 mr-2 mt-0.5" />
                            <span>Certificate of completion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Tabs defaultValue="curriculum">
              <TabsList className="mb-8">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span>
                      {course.modules.length} modules •{" "}
                      {course.modules.reduce(
                        (acc, module) => acc + module.lessons,
                        0
                      )}{" "}
                      lessons • {course.duration} total length
                    </span>
                  </div>

                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className="border rounded-lg overflow-hidden"
                      >
                        <div className="bg-muted/30 p-4 flex items-center justify-between">
                          <h3 className="font-medium">
                            Module {index + 1}: {module.title}
                          </h3>
                          <div className="text-sm text-muted-foreground">
                            {module.lessons} lessons • {module.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-3">
                            {Array.from({ length: module.lessons }).map(
                              (_, lessonIndex) => (
                                <li
                                  key={lessonIndex}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center">
                                    <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                                    <span>
                                      Lesson {lessonIndex + 1}: {module.title}{" "}
                                      {lessonIndex + 1}
                                    </span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    10:00
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="overview">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="mb-4">{course.description}</p>
                  <p className="mb-4">
                    This comprehensive course is designed to take you from
                    beginner to proficient in {course.category}. Whether you're
                    just starting out or looking to enhance your existing
                    skills, this course provides a structured learning path with
                    practical examples and hands-on exercises.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4">
                    What You'll Learn
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course.tags.map((tag, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2">•</div>
                        <span>
                          Master {tag} and apply it to real-world projects
                        </span>
                      </li>
                    ))}
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>
                        Build professional-quality projects for your portfolio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>
                        Understand best practices and industry standards
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4">Requirements</h3>
                  <ul className="list-disc pl-5 mb-8 space-y-2">
                    <li>
                      No prior knowledge required - we'll start from the basics
                    </li>
                    <li>A computer with internet access</li>
                    <li>Enthusiasm and willingness to learn</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4">
                    Who This Course is For
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Beginners with no prior experience in {course.category}
                    </li>
                    <li>
                      Intermediate learners looking to fill knowledge gaps
                    </li>
                    <li>
                      Professionals wanting to stay updated with the latest
                      trends
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold mb-2">
                          {course.rating.toFixed(1)}
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(course.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Course Rating
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => {
                          // Calculate percentage based on rating distribution
                          const percentage =
                            rating === 5
                              ? 70
                              : rating === 4
                              ? 20
                              : rating === 3
                              ? 7
                              : rating === 2
                              ? 2
                              : 1;

                          return (
                            <div key={rating} className="flex items-center">
                              <div className="flex items-center w-20">
                                <span className="mr-2">{rating}</span>
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              </div>
                              <div className="w-12 text-right text-sm text-muted-foreground">
                                {percentage}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="space-y-8">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b pb-8 last:border-0">
                        <div className="flex items-start gap-4">
                          <img
                            src={`/placeholder.svg?height=40&width=40&text=U${
                              i + 1
                            }`}
                            alt="User"
                            className="rounded-full h-10 w-10"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Student {i + 1}</h4>
                              <span className="text-sm text-muted-foreground">
                                2 weeks ago
                              </span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${
                                    j < 5 - i
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <p>
                              This course exceeded my expectations. The
                              instructor explains complex concepts in a way
                              that's easy to understand, and the practical
                              exercises helped reinforce what I learned.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor">
                <div className="mb-8">
                  <div className="flex items-start gap-6 mb-8">
                    <img
                      src="/placeholder.svg?height=120&width=120"
                      alt={course.instructor}
                      className="rounded-full h-24 w-24 object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {course.instructor}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {course.instructorTitle}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium mr-1">4.8</span>
                          <span className="text-muted-foreground">
                            Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            25,430 Students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-5 w-5 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            12 Courses
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    About the Instructor
                  </h3>
                  <p className="mb-4">
                    {course.instructor} is a seasoned professional with over 10
                    years of experience in {course.category}. They have worked
                    with leading companies in the industry and have a passion
                    for teaching and sharing their knowledge.
                  </p>
                  <p className="mb-4">
                    Their teaching approach focuses on practical, hands-on
                    learning that prepares students for real-world challenges.
                    With a background in both academia and industry, they bring
                    a unique perspective to their courses.
                  </p>
                  <p>
                    When not teaching, they contribute to open-source projects
                    and speak at industry conferences around the world.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </LayoutComponent>
  );
};
