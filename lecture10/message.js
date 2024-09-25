// arrow function
const message = () => {
    const name = "Semmy Wellem Taju";
    const age = 30;
    const status = "Single";
    const major = "Information Systems";
    const faculty = "Computer Science";
    const address = "Jln. Bungin, No. 4. Bolaang District";
    const interests = "Programmer, machine learning, AI";

    return `
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Age:</strong> ${age} years old</li>
            <li><strong>Status:</strong> ${status}</li>
            <li><strong>Major:</strong> ${major}</li>
            <li><strong>Faculty:</strong> ${faculty}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Interests:</strong> ${interests}</li>
        </ul>
    `;
};

//export
export default message;