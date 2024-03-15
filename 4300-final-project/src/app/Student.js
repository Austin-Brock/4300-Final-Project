let student = {
    id: 1,
    img : "http://images4.fanpop.com/image/photos/22300000/Halle-Berry-2011-FiFi-Awards-halle-berry-22345769-1411-2000.jpg",
    name : "Austin",
    Major: "Computer Science"
}

const Student = () => {
    return (
        <div>
            <img src ={student.img} width ="200px" alt="picture"/>
            <h2>Name: {student.name}</h2>
            <p>Major: {student.Major}</p>
        </div>
    );
};

export default Student