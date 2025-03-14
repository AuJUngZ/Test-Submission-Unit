import prisma from "../libs/prisma.js";

export const createHotel = async (hotelData) => {
  return await prisma.hotel.create({ data: hotelData });
};

export const findHotels = async (id) => {
  const whereClause = id ? { id: parseInt(id) } : {};
  return await prisma.hotel.findMany({ where: whereClause });
};

export const searchHotelsByDate = async (startDate, endDate) => {
  return await prisma.hotel.findMany({
    where: {
      doingtime: {
        gte: startDate,
        lt: endDate,
      },
    },
  });
};
