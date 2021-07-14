export interface Person {
    //make sure to match spelling/casing in the api 
    //that helps angular to map JSON to our intertface 

    name:string;
    height: number;
    homeworld: string;
    films: string[];

}