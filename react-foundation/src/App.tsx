/*import './App.css'
import './components/CourseCard'
import { CoursePreview } from './components/CourseCard'
export default function App(){
  return <h1>my first React app</h1>
  //<CoursePreview></CoursePreview>
}*/



import React from 'react';


interface ICourse {
  id: string | number;
  title: string;
  description?: string; 
  price?: number; 
}

interface CourseCardProps {
  course: ICourse;
}


const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { title, description, price } = course;
  
  const isFree = price === undefined || price === 0;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '8px 0' }}>
      <h3>{title}</h3>
      
      {description && <p>{description}</p>}
      <div>
        {isFree ? (
          <span style={{ color: 'green', fontWeight: 'bold' }}>Безкоштовно</span>
        ) : (
          <span>Ціна: {price} грн</span>
        )}
      </div>
    </div>
  );
};

interface WrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<WrapperProps> = ({ title, children }) => {
  return (
    <section style={{ padding: '20px', background: '#f9f9f9', borderRadius: '12px' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};


const CourseListApp: React.FC = () => {
  const courses: ICourse[] = [
    {
      id: 1,
      title: 'React для початківців',
      description: 'Вивчіть основи React, компоненти та хуки з нуля.',
      price: 1500,
    },
    {
      id: 2,
      title: 'TypeScript в деталях',
      description: 'Поглиблений курс по типізації в сучасному JS/TS.',
      price: 0,
    },
    {
      id: 3,
      title: 'Розширений Node.js',
      price: 2500,
    },
  ];

  return (
    <SectionWrapper title="Список доступних курсів">
      
      {courses.length === 0 ? (
        <p>Наразі немає доступних курсів.</p>
      ) : (
        
        courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))
      )}
    </SectionWrapper>
  );
};

export default CourseListApp;