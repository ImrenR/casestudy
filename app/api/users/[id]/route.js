import data from "../../../../data/sample_data.json"

export async function GET(request,{params}) { // api route signature

const id = Number((await params).id);
const user = data.find(c=> c.id === id);


  if(!user) {
    return Response.json(
      {message: "USER NOT FOUND!.."},
      {status:404}
    );
  }
//! checked on postman data has been recevied,you can check image on the folder
  return Response.json(user);
}