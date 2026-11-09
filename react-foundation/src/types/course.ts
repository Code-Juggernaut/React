export type course_level = 'beginner' | 'intermediate' | 'expert';

export interface course{
    id:string;
    title:string;
    description?:string;
    teacher:string;
    level:course_level;
    price:number;
    lessons:number;
    is_published:boolean;

}