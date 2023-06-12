////////The Nolywood Planner///////
//As a producer in the booming movie Industry, you are incharge of multipl
//e projects t once. Ech movie hs different cast members, shooting Schedules and budgets. You want 
//to write a program to help manage your film projects. The software should be able to handle the complexity of scheduling, 
//budgeting and coordinating between different movie projects.
class ManageProject{
    constructor(budget, duration,){
        this.budget
        this.duration
    }
    getSchedule(noOfscenes){
        let scene1 = this.duration/noOfscenes
        console.log({scene1});
    }
    getBudget(allocatedAmount){
        
    }
    
}
const firstOne = new ManageProject(2000,500);
console.log(firstOne);
