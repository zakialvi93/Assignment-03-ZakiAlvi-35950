abstract class Attendance //Abstraction
{
    abstract CheckAttendance(s: string): void; //Abstraction
}

interface InterviewOfEmployee //Interface Segregation Principle
{
    Interview(s: string): void;
}


class DevOps implements InterviewOfEmployee //Interface Segregation Principle
{
    Interview(s: string):void //Interface Segregation Principle
    {
        console.log(s);
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
    CheckAttendance(s: string): void //Abstraction
    {
        console.log(s);
    }

    private Audit(): void //Encapsulation and Single Responsibility Principle
    {
        console.log("Company's Audit is done by Accounts Department");
    }
}

class HumanResource extends Attendance implements InterviewOfEmployee 
{
    Interview(s: string):void //Interface Segregation Principle
    {
        console.log(s);
    }

    CheckAttendance(s: string): void //Abstraction
    {
        console.log(s);
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
Dev.Interview("One interview is conducted by DevOps Engineer"); //Polymorphism
Hr.Interview("Another interview is conducted by HR");  //Polymorphism
console.log("Property of Checking Attendance: ");
Acc.CheckAttendance("Attendance is determined by Accounts Department"); //Polymorphism
Hr.CheckAttendance("Attendance is also determined by HR Department"); //Polymorphism

