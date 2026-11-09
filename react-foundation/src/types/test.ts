const title :string = "react";
const lesson:number = 12;
const is_published: boolean = true;


const topics:string[] = ["X1","X2"];

interface course{
    id:number;
    title:string;
    lessons:number;
    is_published:boolean;
};

const data:course = {
    id:0,
    title:"react",
    lessons:2,
    is_published: false
}