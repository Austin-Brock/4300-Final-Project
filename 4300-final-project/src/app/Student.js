let student = {
    id: 1,
    img : "http://images4.fanpop.com/image/photos/22300000/Halle-Berry-2011-FiFi-Awards-halle-berry-22345769-1411-2000.jpg",
    name : Austin,
    Major: "Computer Science"
}

const Student = () => {
    return (
        <div>
            <img src ={student.img} width ="200px" alt="picture"></img>
            <h2>Nanme: {student.name}</h2>
            <P>Major: {student.Major}</P>
        </div>
    )
}