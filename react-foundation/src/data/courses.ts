import type {course} from "../types/course";


export const courses: course[] =[
    {
        id: 'js',
        title: 'JavaScript',
        description: 'Курс з JavaScript',
        teacher: 'John Doe',
        level: 'beginner',
        price: 1000,
        lessons: 12,
        isPublished: true
    },
    {
        id: 'ts',
        title: 'TypeScript',
        description: 'Курс з TypeScript',
        teacher: 'Jane Smith',
        level: 'intermediate',
        price: 1500,
        lessons: 10,
        isPublished: true
    },
    {
        id: 'react',
        title: 'React',
        description: 'Курс з React',
        teacher: 'Bob Johnson',
        level: 'advanced',
        price: 2000,
        lessons: 15,
        isPublished: true
    }
]