export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post{
    userId:number
    title:string
    body:string
}

export class JSONSDK{
    private baseUrl: string;

    constructor(baseUrl:string = "https://jsonplaceholder.typicode.com"){
        this.baseUrl = baseUrl;
    }

    async fetchAllUsers():Promise<User[]>{
        try {
            const response = await fetch(`${this.baseUrl}/users`)
            if(!response.ok){
                throw new Error("Network Response was not okay");
            }
            return await response.json();
            
        } catch (error) {
            console.log("fetch Error",error);
            throw error;
            
        }
    }
   
async fetchUserById(userId:number):Promise<User>{
        try {
            const response = await fetch(`${this.baseUrl}/users/${userId}`)
            if(!response.ok){
                throw new Error("network response was not okay")
            }
            return await response.json();
            
        } catch (error) {
            console.log("fetching error ",error)
            throw error 
        }
    }

async fetchAllPost ():Promise<Post>{
    try {
        const response = await fetch(`${this.baseUrl}/posts`)
        if(!response.ok){
            throw new Error("network response isnot okay")
        }
        return response.json();
        
    } catch (error) {
        console.log("fetching post error",error)
        throw error
        
    }

}
async fetchOnePost (postId:number):Promise<Post>{
    try {
        const response = await fetch(`${this.baseUrl}/posts/${postId}`)
        if(!response.ok){
            throw new Error("network response isnot okay")
        }
        return response.json();
        
    } catch (error) {
        console.log("fetching post error",error)
        throw error
        
    }

}
async CreatePost (data:Post):Promise<Post>{
    try {
        const response = await fetch(`${this.baseUrl}/posts`,{
            method:"POST",
            body:JSON.stringify(data)

        })
        if(!response.ok){
            throw new Error("network response isnot okay")
        }
        return response.json();
        
    } catch (error) {
        console.log("fetching post error",error)
        throw error
        
    }

}
}

