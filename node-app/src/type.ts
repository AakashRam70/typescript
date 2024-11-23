type Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string,
    department: string
}

type TeamLead = Employee & Manager;

const team: TeamLead = {
    name: "Aakash",
    startDate: new Date(),
    department: "SDE1"
};