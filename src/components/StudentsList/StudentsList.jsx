function StudentList(){
    const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

    return(
        <>
        <ul>
        {students.map((oneStudent)=>
        oneStudent !=='Sayed Hamed'&&(
        <div key={oneStudent}>
            {oneStudent}
        </div>
        )


        )}
        </ul>

        
        </>

    )
}

export default StudentList