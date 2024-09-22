const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
    const dress = {
        id: "1",
        name: 'Wedding dress',
        price: 100,
        description: 'A beautiful wedding dress',
        image: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4,
        color: 'White',
    }

  const productsDefault = await prisma.product.upsert({
    where: { id: dress.id },
    update: {},
    create: dress,
  })

    console.log("Seed OK")
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })