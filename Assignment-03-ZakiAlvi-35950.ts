abstract class Attendance //Abstraction
{
    abstract CheckAttendance(): void; //Abstraction
}

interface InterviewOfEmployee //Interface Segregation Principle
{
    Interview(): void;
}


class DevOps implements InterviewOfEmployee //Interface Segregation Principle
{
    Interview():void //Interface Segregation Principle
    {
        console.log("One interview is conducted by DevOps Engineer");
    }

    private Development(): void //Encapsulation and Single Responsibility Principle
    {
        console.log("Softwares are developed by DevOps Department");
    }

    private QA(): void //Encapsulation and Single Responsibility Principle
    {
        console.log("Quality Assurance is performed by DevOps Department");
    }
}

class Accounts extends Attendance //Inheritance and Open/Closed Principle
{
    CheckAttendance(): void //Abstraction
    {
        console.log("Attendance is determined by Accounts Department");
    }

    private Audit(): void //Encapsulation and Single Responsibility Principle
    {
        console.log("Company's Audit is done by Accounts Department");
    }
}

class HumanResource extends Attendance implements InterviewOfEmployee 
{
    Interview():void //Interface Segregation Principle
    {
        console.log("Another interview is conducted by HR");
    }

    CheckAttendance(): void //Abstraction
    {
        console.log("Attendance is also determined by HR Department");
    }

    private MaintainRecords(): void //Encapsulation and Single Responsibility Principle
    {
        console.log("Records of Employees are maintained by the HR Department");
    }
}

var Dev = new DevOps(); //Dependency Inversion Principle
var Acc = new Accounts(); //Dependency Inversion Principle
var Hr = new HumanResource(); //Dependency Inversion Principle

console.log("Some Common Properties in different classes are: ");
console.log("Property of Interview: ");
Dev.Interview(); //Polymorphism
Hr.Interview();  //Polymorphism
console.log("Property of Checking Attendance: ");
Acc.CheckAttendance(); //Polymorphism
Hr.CheckAttendance(); //Polymorphism

