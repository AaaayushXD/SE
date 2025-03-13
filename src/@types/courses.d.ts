declare namespace Courses {
  interface CourseTypes {
    id: number;
    title: string;
    image: string;
    instructor: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
    video: string;
  }

  interface Modules {
    title: string;
    lessons: number;
    duration: string;
  }
  interface CourseCard {
    id: number;
    title: string;
    instructor: string;
    instructorTitle: string;
    description: string;
    duration: string;
    level: string;
    rating: number;
    reviews: number;
    students: number;
    price: number;
    category: string;
    subcategory: string;
    tags: string[];
    image: string;
    lastUpdated: string;
    modules: Modules[];
    youtubeLink: string;
  }
}
