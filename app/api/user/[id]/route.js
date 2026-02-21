import data from "../../../../sample_data.json";

export async function GET(request, { params }) {

  const id = Number( (await params).id);

  const user = data.find(u => u.id === id);

  if (!user) {
  /// console.log(request.url); // on console = > GET /api/user/1 
    return Response.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  return Response.json(user);
}