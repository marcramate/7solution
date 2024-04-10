import axios from "axios";

export const dynamic: string = "force-dynamic";

const groupData = (users: User[]): DepartmentSummary => {
  const Depart: DepartmentSummary = {};

  users.forEach((user) => {
    const { department } = user.company;
    const { firstName, lastName, address } = user;
    const fullName = `${firstName}${lastName}`;

    if (!Depart[department]) {
      Depart[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    // switch (user.gender) {
    //   case "male": {
    //     Depart[department].male++;
    //   }
    //   case "female": {
    //     Depart[department].female++;
    //   }
    // }

    if (user.gender === "male") {
      Depart[department].male++;
    } else {
      Depart[department].female++;
    }

    if (!Depart[department].ageRange) {
      const ageRange = `${Math.floor(user.age / 10) * 10}-${
        (Math.floor(user.age / 10) + 1) * 10 - 1
      }`;
      Depart[department].ageRange = ageRange;
    }

    if (!Depart[department].hair[user.hair.color]) {
      Depart[department].hair[user.hair.color] = 0;
    }
    Depart[department].hair[user.hair.color]++;

    Depart[department].addressUser[fullName] = address.postalCode;
  });
  return Depart;
};

export async function GET() {
  try {
    const URI = "https://dummyjson.com/users";

    const { data } = await axios.get<{
      status(arg0: string, status: any, statusText: any): unknown;
      statusText(arg0: string, status: any, statusText: any): unknown;
      users: User[];
    }>(URI);
    // console.log("data:", data.status, data.statusText);
    const summary = groupData(data.users);

    console.log("datasum:", summary);

    return new Response(JSON.stringify(summary), {
      status: 200,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
