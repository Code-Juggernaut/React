export function CoursePreview(){
    const title = "react";
    const lessons = 12;
    return(
        <article className="course-prewiev">
            <h2>{title}</h2>
            <p>amount of lessons {lessons}</p>
        </article>
    )
}