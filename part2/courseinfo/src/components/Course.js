import React from 'react'

const Headers = ({ course }) => {
    return <h2>{course.name}</h2>
  }
  
  const Total = ({ course }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
    const exercises = course.parts.map(e => e.exercises)
    const total = exercises.reduce((s, p) => {
      console.log('what is happening', s, p)
      return s + p
    })
    console.log(total);
    return(
      <p><strong>Number of exercises {total}</strong></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => 
            <Part key={part.id} part={part} />
          )}
      </div>
    )
  }
  
  const Courses = ({ courses }) => {
    return (
      <>
      <Headers course="Web development curriculum" />
      <Headers course={courses} />
      <Content course={courses} />
      <Total course={courses} />
      </>
    )
  }

  export default Courses