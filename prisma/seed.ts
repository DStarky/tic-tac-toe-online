import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user1 = await prisma.user.create({
    data: {
      login: "user1",
      passwordHash: "adasdasdasdmin",
      rating: 1000,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      login: "user2",
      passwordHash: "adasdasdasdmin",
      rating: 800,
    },
  });


}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
